<script setup>
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

/* Cloudinary config */
const CLOUD_NAME = 'do4qbtm7b'
const UPLOAD_PRESET = 'portfolio_upload'
const CLOUD_FOLDER = 'portfolio_costa'

const uploadToCloudinary = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
  const form = new FormData()
  form.append('file', file)
  form.append('upload_preset', UPLOAD_PRESET)
  form.append('folder', CLOUD_FOLDER)

  const res = await fetch(url, { method: 'POST', body: form })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'Upload Cloudinary échoué')
  return data.secure_url
}

/* State */
const newTitle = ref('')
const newDescription = ref('')
const newSourceLink = ref('')
const newSections = ref([])
const newImageFiles = ref([])
const newImagePreviews = ref([])
const fileInputAdd = ref(null)

/* Images */
function pushFilesWithPreview(files, filesRef, previewsRef) {
  files.forEach(file => {
    filesRef.value.push(file)
    const reader = new FileReader()
    reader.onload = () => previewsRef.value.push(reader.result)
    reader.readAsDataURL(file)
  })
}
const handleFilesAdd = (e) => {
  const files = Array.from(e?.dataTransfer?.files || e?.target?.files || [])
  pushFilesWithPreview(files, newImageFiles, newImagePreviews)
}
const handleDropAdd = (e) => handleFilesAdd(e)
const removeAddImage = (idx) => {
  newImageFiles.value.splice(idx, 1)
  newImagePreviews.value.splice(idx, 1)
}

/* CRUD */
const addProject = async () => {
  if (!newTitle.value || !newDescription.value) return

  const urls = []
  for (const f of newImageFiles.value) {
    const url = await uploadToCloudinary(f)
    urls.push(url)
  }

  await addDoc(collection(db, 'projects'), {
    title: newTitle.value,
    description: newDescription.value,
    sourceLink: newSourceLink.value || null,
    sections: newSections.value,
    images: urls,
    createdAt: new Date()
  })

  resetForm()
}

const resetForm = () => {
  newTitle.value = ''
  newDescription.value = ''
  newSourceLink.value = ''
  newSections.value = []
  newImageFiles.value = []
  newImagePreviews.value = []
}

/* Sections */
const addSection = (target) => target.push({ title: '', items: [] })
const addItem = (section) => section.items.push('')
const removeSection = (target, index) => {
  if (confirm('Supprimer cette section ?')) target.splice(index, 1)
}
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-12">
    <!-- Bouton retour -->
    <div class="mb-6">
      <router-link
        to="/admin"
        class="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium shadow-md"
      >
        ⬅️ Retour au menu Admin
      </router-link>
    </div>

    <div class="max-w-6xl mx-auto bg-gray-800/90 p-10 rounded-2xl text-white">
      <h1 class="text-3xl font-bold mb-8 text-blue-400">➕ Ajouter un projet</h1>

      <div class="space-y-4">
        <input v-model="newTitle" placeholder="Titre du projet" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white" />
        <textarea v-model="newDescription" placeholder="Description" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white"></textarea>
        <input v-model="newSourceLink" placeholder="Lien code source" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white" />

        <!-- Images -->
        <div>
          <label class="block mb-2 font-semibold">📷 Images du projet</label>
          <div class="border-2 border-dashed border-gray-500 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-600/30 transition"
               @click="fileInputAdd?.click()" @dragover.prevent @drop.prevent="handleDropAdd">
            <p class="text-gray-400">Cliquez ou glissez vos images ici</p>
            <input type="file" ref="fileInputAdd" class="hidden" multiple @change="handleFilesAdd" />
          </div>
          <div class="flex gap-3 flex-wrap mt-4">
            <div v-for="(img, i) in newImagePreviews" :key="i" class="relative">
              <img :src="img" class="w-24 h-24 object-cover rounded-lg shadow-md" />
              <button @click="removeAddImage(i)" class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs">✕</button>
            </div>
          </div>
        </div>

        <!-- Sections -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-3">📑 Sections</h3>
          <div v-for="(section, si) in newSections" :key="si" class="border border-gray-500 p-4 rounded-xl mb-4 bg-gray-600/80">
            <div class="flex items-center gap-2 mb-3">
              <input v-model="section.title" placeholder="Titre section" class="flex-1 px-3 py-2 rounded bg-gray-500 text-white" />
              <button @click="removeSection(newSections, si)" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">🗑️</button>
            </div>
            <div v-for="(item, ii) in section.items" :key="ii" class="flex gap-2 mb-2">
              <input v-model="section.items[ii]" placeholder="Élément" class="flex-1 px-3 py-2 rounded bg-gray-500 text-white" />
              <button @click="section.items.splice(ii,1)" class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">❌</button>
            </div>
            <button @click="addItem(section)" class="mt-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">➕ Ajouter élément</button>
          </div>
          <button @click="addSection(newSections)" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-sm">➕ Ajouter une section</button>
        </div>
      </div>

      <div class="mt-6 text-center">
        <button @click="addProject" class="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg">
          🚀 Ajouter le projet
        </button>
      </div>
    </div>
  </div>
</template>
