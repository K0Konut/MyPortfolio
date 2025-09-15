<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const user = ref(null)
const router = useRouter()
const projects = ref([])

// Champs ajout
const newTitle = ref('')
const newDescription = ref('')
const newSourceLink = ref('')
const newSections = ref([])
const newImages = ref([]) // URLs (stockées dans /public/images/ ou externes)

// Champs édition
const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')
const editSourceLink = ref('')
const editSections = ref([])
const editImages = ref([])

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

const fetchProjects = async () => {
  projects.value = []
  const querySnapshot = await getDocs(collection(db, "projects"))
  querySnapshot.forEach((docSnap) => {
    projects.value.push({ id: docSnap.id, ...docSnap.data() })
  })
}

// ➕ Ajouter projet
const addProject = async () => {
  if (!newTitle.value || !newDescription.value) return
  await addDoc(collection(db, "projects"), {
    title: newTitle.value,
    description: newDescription.value,
    images: newImages.value, // stocke les URLs
    sourceLink: newSourceLink.value || null,
    sections: newSections.value,
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
  newImages.value = []
}

// ❌ Supprimer projet
const deleteProject = async (id) => {
  await deleteDoc(doc(db, "projects", id))
  fetchProjects()
}

// ✏️ Démarrer édition
const startEdit = (p) => {
  editingId.value = p.id
  editTitle.value = p.title
  editDescription.value = p.description
  editSourceLink.value = p.sourceLink || ''
  editSections.value = p.sections || []
  editImages.value = p.images || []
}

// 💾 Sauvegarder édition
const saveEdit = async () => {
  if (!editingId.value) return
  const projectRef = doc(db, "projects", editingId.value)
  await updateDoc(projectRef, {
    title: editTitle.value,
    description: editDescription.value,
    images: editImages.value,
    sourceLink: editSourceLink.value || null,
    sections: editSections.value
  })
  editingId.value = null
  fetchProjects()
}

// ➕ Ajouter section
const addSection = (target) => {
  target.push({ title: '', items: [] })
}

// ➕ Ajouter item
const addItem = (section) => {
  section.items.push('')
}

// ➕ Ajouter une URL d'image
const addImage = (target) => {
  target.push('')
}
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-20">
    <div v-if="user" class="max-w-6xl mx-auto bg-gray-800/90 p-10 rounded-2xl text-white">
      <h1 class="text-3xl font-bold mb-8">Gestion des projets</h1>

      <!-- ➕ Formulaire ajout -->
      <div class="bg-gray-700 p-6 rounded-xl mb-8">
        <h2 class="text-xl font-semibold mb-4 text-blue-400">➕ Ajouter un projet</h2>

        <input v-model="newTitle" placeholder="Titre" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <textarea v-model="newDescription" placeholder="Description" class="w-full mb-3 px-4 py-2 rounded bg-gray-600"></textarea>
        <input v-model="newSourceLink" placeholder="Lien code source" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />

        <!-- Images -->
        <div class="mb-4">
          <h3 class="font-semibold mb-2">Images (URLs)</h3>
          <div v-for="(img, i) in newImages" :key="i" class="flex gap-2 mb-2">
            <input v-model="newImages[i]" placeholder="/images/monimage.png ou https://..." class="flex-1 px-2 py-1 rounded bg-gray-500" />
            <button @click="newImages.splice(i,1)" class="text-red-400">❌</button>
          </div>
          <button @click="addImage(newImages)" class="text-green-400">➕ Ajouter une image</button>
        </div>

        <!-- Sections -->
        <div class="mb-4">
          <h3 class="font-semibold mb-2">Sections</h3>
          <div v-for="(section, si) in newSections" :key="si" class="border p-3 rounded mb-3 bg-gray-600">
            <input v-model="section.title" placeholder="Titre de la section" class="w-full mb-2 px-2 py-1 rounded bg-gray-500" />
            <div v-for="(item, ii) in section.items" :key="ii" class="flex gap-2 mb-1">
              <input v-model="section.items[ii]" placeholder="Élément" class="flex-1 px-2 py-1 rounded bg-gray-500" />
              <button @click="section.items.splice(ii,1)" class="text-red-400">❌</button>
            </div>
            <button @click="addItem(section)" class="text-blue-400 text-sm">➕ Ajouter élément</button>
          </div>
          <button @click="addSection(newSections)" class="text-green-400">➕ Ajouter une section</button>
        </div>

        <button @click="addProject" class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">
          Ajouter
        </button>
      </div>

      <!-- 📦 Liste projets -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="p in projects" :key="p.id" class="bg-gray-700 p-6 rounded-xl">
          <div v-if="editingId === p.id">
            <input v-model="editTitle" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <textarea v-model="editDescription" class="w-full mb-2 px-3 py-2 rounded bg-gray-600"></textarea>

            <!-- Images -->
            <div class="mb-2">
              <h3 class="text-sm mb-2">Images</h3>
              <div v-for="(img, i) in editImages" :key="i" class="flex gap-2 mb-2">
                <input v-model="editImages[i]" class="flex-1 px-2 py-1 rounded bg-gray-500" />
                <button @click="editImages.splice(i,1)" class="text-red-400">❌</button>
              </div>
              <button @click="addImage(editImages)" class="text-green-400">➕ Ajouter une image</button>
            </div>

            <input v-model="editSourceLink" placeholder="Lien code source" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />

            <div v-for="(section, si) in editSections" :key="si" class="border p-3 rounded mb-3 bg-gray-600">
              <input v-model="section.title" placeholder="Titre section" class="w-full mb-2 px-2 py-1 rounded bg-gray-500" />
              <div v-for="(item, ii) in section.items" :key="ii" class="flex gap-2 mb-1">
                <input v-model="section.items[ii]" class="flex-1 px-2 py-1 rounded bg-gray-500" />
                <button @click="section.items.splice(ii,1)" class="text-red-400">❌</button>
              </div>
              <button @click="addItem(section)" class="text-blue-400 text-sm">➕ Ajouter élément</button>
            </div>
            <button @click="addSection(editSections)" class="text-green-400 mb-2">➕ Ajouter une section</button>

            <button @click="saveEdit" class="bg-blue-600 px-4 py-2 rounded mr-2">💾 Sauvegarder</button>
            <button @click="editingId = null" class="bg-gray-500 px-4 py-2 rounded">❌ Annuler</button>
          </div>
          <div v-else>
            <h3 class="text-xl font-bold text-purple-400">{{ p.title }}</h3>
            <p class="text-gray-300">{{ p.description }}</p>
            <div v-if="p.images" class="flex gap-2 mt-2 flex-wrap">
              <img v-for="(img, i) in p.images" :key="i" :src="img" class="w-16 h-16 object-cover rounded" />
            </div>
            <button @click="startEdit(p)" class="text-blue-400 mr-3 mt-3">✏️ Modifier</button>
            <button @click="deleteProject(p.id)" class="text-red-400 mt-3">❌ Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
