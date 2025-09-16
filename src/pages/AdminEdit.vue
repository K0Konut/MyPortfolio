<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'

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
const projects = ref([])
const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')
const editSourceLink = ref('')
const editSections = ref([])
const editImages = ref([])
const editNewFiles = ref([])
const editNewPreviews = ref([])

/* Lifecycle */
onMounted(() => fetchProjects())
const fetchProjects = async () => {
  projects.value = []
  const snap = await getDocs(collection(db, 'projects'))
  snap.forEach(d => projects.value.push({ id: d.id, ...d.data() }))
}

/* Utils Images */
function pushFilesWithPreview(files, filesRef, previewsRef) {
  files.forEach(file => {
    filesRef.value.push(file)
    const reader = new FileReader()
    reader.onload = () => previewsRef.value.push(reader.result)
    reader.readAsDataURL(file)
  })
}
const handleFilesEdit = (e) => {
  const files = Array.from(e?.dataTransfer?.files || e?.target?.files || [])
  pushFilesWithPreview(files, editNewFiles, editNewPreviews)
}
const handleDropEdit = (e) => handleFilesEdit(e)
const removeEditNewImage = (idx) => { editNewFiles.value.splice(idx, 1); editNewPreviews.value.splice(idx, 1) }
const removeExistingImage = (idx) => editImages.value.splice(idx, 1)

/* CRUD */
const deleteProject = async (id) => { await deleteDoc(doc(db, 'projects', id)); fetchProjects() }
const startEdit = (p) => {
  editingId.value = p.id
  editTitle.value = p.title
  editDescription.value = p.description
  editSourceLink.value = p.sourceLink || ''
  editSections.value = p.sections ? JSON.parse(JSON.stringify(p.sections)) : []
  editImages.value = Array.isArray(p.images) ? [...p.images] : []
  editNewFiles.value = []
  editNewPreviews.value = []
}
const saveEdit = async () => {
  if (!editingId.value) return
  if (editNewFiles.value.length) {
    for (const f of editNewFiles.value) {
      const url = await uploadToCloudinary(f)
      editImages.value.push(url)
    }
  }
  await updateDoc(doc(db, 'projects', editingId.value), {
    title: editTitle.value,
    description: editDescription.value,
    sourceLink: editSourceLink.value || null,
    sections: editSections.value,
    images: editImages.value
  })
  editingId.value = null
  fetchProjects()
}

/* Sections */
const addSection = (target) => target.push({ title: '', items: [] })
const addItem = (section) => section.items.push('')
const removeSection = (target, index) => { if (confirm('Supprimer cette section ?')) target.splice(index, 1) }
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
      <h1 class="text-3xl font-bold mb-8 text-purple-400">📦 Projets existants</h1>

      <div v-if="projects.length === 0" class="text-gray-400 italic">Aucun projet pour le moment.</div>

      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="p in projects" :key="p.id" class="bg-gray-700 p-6 rounded-xl shadow-lg">
          <div v-if="editingId === p.id">
            <input v-model="editTitle" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <textarea v-model="editDescription" class="w-full mb-2 px-3 py-2 rounded bg-gray-600"></textarea>
            <input v-model="editSourceLink" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" placeholder="Lien code source" />

            <!-- Images -->
            <div class="mb-3">
              <h3 class="text-sm mb-2">🖼️ Images actuelles</h3>
              <div class="flex gap-2 flex-wrap">
                <div v-for="(img, i) in editImages" :key="i" class="relative">
                  <img :src="img" class="w-20 h-20 object-cover rounded" />
                  <button @click="removeExistingImage(i)" class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs">✕</button>
                </div>
              </div>
            </div>

            <div class="mt-2 border-2 border-dashed border-gray-500 rounded-xl p-4 text-center hover:bg-gray-600/30 transition"
                 @dragover.prevent @drop.prevent="handleDropEdit">
              <label :for="`fileInputEdit-${p.id}`" class="block text-gray-400 text-sm cursor-pointer">
                Cliquez ou glissez de nouvelles images ici
              </label>
              <input class="hidden" type="file" :id="`fileInputEdit-${p.id}`" multiple @change="handleFilesEdit" />
            </div>
            <div class="flex gap-2 flex-wrap mt-3">
              <div v-for="(img, i) in editNewPreviews" :key="i" class="relative">
                <img :src="img" class="w-16 h-16 object-cover rounded" />
                <button @click="removeEditNewImage(i)" class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs">✕</button>
              </div>
            </div>

            <!-- Sections -->
            <div v-for="(section, si) in editSections" :key="si" class="border p-3 rounded mb-3 bg-gray-600">
              <div class="flex items-center gap-2 mb-2">
                <input v-model="section.title" placeholder="Titre section" class="flex-1 px-2 py-1 rounded bg-gray-500" />
                <button @click="removeSection(editSections, si)" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">🗑️</button>
              </div>
              <div v-for="(item, ii) in section.items" :key="ii" class="flex gap-2 mb-1">
                <input v-model="section.items[ii]" class="flex-1 px-2 py-1 rounded bg-gray-500" />
                <button @click="section.items.splice(ii,1)" class="text-red-400">❌</button>
              </div>
              <button @click="addItem(section)" class="text-blue-400 text-sm">➕ Ajouter élément</button>
            </div>
            <button @click="addSection(editSections)" class="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm">➕ Ajouter section</button>

            <div class="flex justify-end gap-2 mt-2">
              <button @click="saveEdit" class="bg-blue-600 px-4 py-2 rounded">💾 Sauvegarder</button>
              <button @click="editingId = null" class="bg-gray-500 px-4 py-2 rounded">❌ Annuler</button>
            </div>
          </div>

          <!-- Mode affichage -->
          <div v-else>
            <h3 class="text-xl font-bold text-purple-400">{{ p.title }}</h3>
            <p class="text-gray-300">{{ p.description }}</p>
            <div v-if="p.images?.length" class="flex gap-2 mt-2 flex-wrap">
              <img v-for="(img, i) in p.images" :key="i" :src="img" class="w-16 h-16 object-cover rounded" />
            </div>
            <div class="flex justify-end gap-3 mt-3">
              <button @click="startEdit(p)" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-sm">✏️ Modifier</button>
              <button @click="deleteProject(p.id)" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm">❌ Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
