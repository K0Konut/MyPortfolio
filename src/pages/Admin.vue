<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'

/* ====== Cloudinary ====== */
const CLOUD_NAME = 'do4qbtm7b'           // <-- ton cloud name
const UPLOAD_PRESET = 'portfolio_upload'// <-- unsigned preset
const CLOUD_FOLDER = 'portfolio_costa'  // <-- ton dossier

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

/* ====== State ====== */
const user = ref(null)
const router = useRouter()
const projects = ref([])

/* Ajout */
const newTitle = ref('')
const newDescription = ref('')
const newSourceLink = ref('')
const newSections = ref([])
const newImageFiles = ref([])
const newImagePreviews = ref([])
const fileInputAdd = ref(null)

/* Édition */
const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')
const editSourceLink = ref('')
const editSections = ref([])
const editImages = ref([])
const editNewFiles = ref([])
const editNewPreviews = ref([])

/* ====== Lifecycle ====== */
onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    if (u) {
      user.value = u
      fetchProjects()
    } else {
      router.push('/login')
    }
  })
})

/* ====== Firestore ====== */
const fetchProjects = async () => {
  projects.value = []
  const snap = await getDocs(collection(db, 'projects'))
  snap.forEach(d => projects.value.push({ id: d.id, ...d.data() }))
}

/* ====== Utils Images ====== */
function pushFilesWithPreview(files, filesRef, previewsRef) {
  files.forEach(file => {
    filesRef.value.push(file)
    const reader = new FileReader()
    reader.onload = () => previewsRef.value.push(reader.result)
    reader.readAsDataURL(file)
  })
}

// Ajout
const handleFilesAdd = (e) => {
  const files = Array.from(e?.dataTransfer?.files || e?.target?.files || [])
  pushFilesWithPreview(files, newImageFiles, newImagePreviews)
}
const handleDropAdd = (e) => handleFilesAdd(e)
const removeAddImage = (idx) => {
  newImageFiles.value.splice(idx, 1)
  newImagePreviews.value.splice(idx, 1)
}

// Edition
const handleFilesEdit = (e) => {
  const files = Array.from(e?.dataTransfer?.files || e?.target?.files || [])
  pushFilesWithPreview(files, editNewFiles, editNewPreviews)
}
const handleDropEdit = (e) => handleFilesEdit(e)
const removeEditNewImage = (idx) => {
  editNewFiles.value.splice(idx, 1)
  editNewPreviews.value.splice(idx, 1)
}
const removeExistingImage = (idx) => {
  editImages.value.splice(idx, 1)
}

/* ====== CRUD ====== */
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
  fetchProjects()
}

const resetForm = () => {
  newTitle.value = ''
  newDescription.value = ''
  newSourceLink.value = ''
  newSections.value = []
  newImageFiles.value = []
  newImagePreviews.value = []
}

const deleteProject = async (id) => {
  await deleteDoc(doc(db, 'projects', id))
  fetchProjects()
}

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

/* ====== Sections ====== */
const addSection = (target) => target.push({ title: '', items: [] })
const addItem = (section) => section.items.push('')
const removeSection = (target, index) => {
  if (confirm('Supprimer cette section ?')) target.splice(index, 1)
}
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-20">
    <div v-if="user" class="max-w-6xl mx-auto bg-gray-800/90 p-10 rounded-2xl text-white">
      <h1 class="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        ⚙️ Panneau d’Administration
      </h1>

      <!-- ============ AJOUT ============ -->
      <div class="bg-gray-700/70 p-8 rounded-2xl mb-12 shadow-xl border border-gray-600">
        <h2 class="text-2xl font-bold mb-6 text-blue-400">➕ Ajouter un projet</h2>

        <div class="space-y-4">
          <input v-model="newTitle" placeholder="Titre du projet" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white placeholder-gray-400 outline-none" />
          <textarea v-model="newDescription" placeholder="Description" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white placeholder-gray-400 outline-none"></textarea>
          <input v-model="newSourceLink" placeholder="Lien code source (GitHub, etc.)" class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white placeholder-gray-400 outline-none" />

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
                <input v-model="section.title" placeholder="Titre section" class="flex-1 px-3 py-2 rounded bg-gray-500 text-white placeholder-gray-300 outline-none" />
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
          <button @click="addProject" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold shadow-lg transition-all">
            🚀 Ajouter le projet
          </button>
        </div>
      </div>

      <!-- ============ LISTE + ÉDITION ============ -->
      <div>
        <h2 class="text-2xl font-bold mb-6 text-purple-400">📦 Projets existants</h2>
        <div v-if="projects.length === 0" class="text-gray-400 italic">Aucun projet pour le moment.</div>

        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="p in projects" :key="p.id" class="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition">

            <!-- MODE ÉDITION -->
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

              <div class="mt-2">
                <div class="border-2 border-dashed border-gray-500 rounded-xl p-4 text-center hover:bg-gray-600/30 transition"
                     @dragover.prevent @drop.prevent="handleDropEdit">
                  <label :for="`fileInputEdit-${p.id}`" class="block text-gray-400 text-sm cursor-pointer">
                    Cliquez ou glissez de nouvelles images ici
                  </label>
                  <input class="hidden" type="file" :id="`fileInputEdit-${p.id}`" multiple @change="handleFilesEdit" />
                </div>
                <div class="flex gap-2 flex-wrap mt-3">
                  <div v-for="(img, i) in editNewPreviews" :key="i" class="relative">
                    <img :src="img" class="w-16 h-16 object-cover rounded" />
                    <button @click="removeEditNewImage(i)" class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-[10px]">✕</button>
                  </div>
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
              <button @click="addSection(editSections)" class="text-green-400 mb-2">➕ Ajouter une section</button>

              <div class="flex justify-end gap-2 mt-2">
                <button @click="saveEdit" class="bg-blue-600 px-4 py-2 rounded">💾 Sauvegarder</button>
                <button @click="editingId = null" class="bg-gray-500 px-4 py-2 rounded">❌ Annuler</button>
              </div>
            </div>

            <!-- MODE AFFICHAGE -->
            <div v-else>
              <h3 class="text-xl font-bold text-purple-400">{{ p.title }}</h3>
              <p class="text-gray-300">{{ p.description }}</p>
              <div v-if="p.sections?.length" class="text-sm text-gray-400 mb-2">{{ p.sections.length }} section(s)</div>
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
  </div>
</template>
