<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

const user = ref(null)
const router = useRouter()
const projects = ref([])

// Champs ajout
const newTitle = ref('')
const newDescription = ref('')
const newFeatures = ref('')
const newStack = ref('')
const newSecurity = ref('')
const newUsage = ref('')
const newImageUrl = ref('')
const newSourceLink = ref('')

// Champs édition
const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')
const editFeatures = ref('')
const editStack = ref('')
const editSecurity = ref('')
const editUsage = ref('')
const editImageUrl = ref('')
const editSourceLink = ref('')

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
    features: newFeatures.value ? newFeatures.value.split(';') : [],
    stack: newStack.value ? newStack.value.split(';') : [],
    security: newSecurity.value ? newSecurity.value.split(';') : [],
    usage: newUsage.value ? newUsage.value.split(';') : [],
    imageUrl: newImageUrl.value || null,
    sourceLink: newSourceLink.value || null,
    createdAt: new Date()
  })
  // reset
  newTitle.value = ''
  newDescription.value = ''
  newFeatures.value = ''
  newStack.value = ''
  newSecurity.value = ''
  newUsage.value = ''
  newImageUrl.value = ''
  newSourceLink.value = ''
  fetchProjects()
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
  editFeatures.value = p.features ? p.features.join(';') : ''
  editStack.value = p.stack ? p.stack.join(';') : ''
  editSecurity.value = p.security ? p.security.join(';') : ''
  editUsage.value = p.usage ? p.usage.join(';') : ''
  editImageUrl.value = p.imageUrl || ''
  editSourceLink.value = p.sourceLink || ''
}

// 💾 Sauvegarder édition
const saveEdit = async () => {
  if (!editingId.value) return
  const projectRef = doc(db, "projects", editingId.value)
  await updateDoc(projectRef, {
    title: editTitle.value,
    description: editDescription.value,
    features: editFeatures.value ? editFeatures.value.split(';') : [],
    stack: editStack.value ? editStack.value.split(';') : [],
    security: editSecurity.value ? editSecurity.value.split(';') : [],
    usage: editUsage.value ? editUsage.value.split(';') : [],
    imageUrl: editImageUrl.value || null,
    sourceLink: editSourceLink.value || null
  })
  editingId.value = null
  fetchProjects()
}
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-20">
    <div v-if="user" class="max-w-5xl mx-auto bg-gray-800/90 p-10 rounded-2xl text-white">
      <h1 class="text-3xl font-bold mb-8">Gestion des projets</h1>

      <!-- ➕ Formulaire ajout -->
      <div class="bg-gray-700 p-6 rounded-xl mb-8">
        <h2 class="text-xl font-semibold mb-4 text-blue-400">Ajouter un projet</h2>
        <input v-model="newTitle" placeholder="Titre" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <textarea v-model="newDescription" placeholder="Description" class="w-full mb-3 px-4 py-2 rounded bg-gray-600"></textarea>
        <input v-model="newFeatures" placeholder="Fonctionnalités (;)" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <input v-model="newStack" placeholder="Stack (;)" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <input v-model="newSecurity" placeholder="Sécurité (;)" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <input v-model="newUsage" placeholder="Utilisation (;)" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <input v-model="newImageUrl" placeholder="Lien image" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <input v-model="newSourceLink" placeholder="Lien code source" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
        <button @click="addProject" class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">Ajouter</button>
      </div>

      <!-- 📦 Liste projets -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="p in projects" :key="p.id" class="bg-gray-700 p-6 rounded-xl">
          <div v-if="editingId === p.id">
            <input v-model="editTitle" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <textarea v-model="editDescription" class="w-full mb-2 px-3 py-2 rounded bg-gray-600"></textarea>
            <input v-model="editFeatures" placeholder="Fonctionnalités (;)" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <input v-model="editStack" placeholder="Stack (;)" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <input v-model="editSecurity" placeholder="Sécurité (;)" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <input v-model="editUsage" placeholder="Utilisation (;)" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <input v-model="editImageUrl" placeholder="Lien image" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <input v-model="editSourceLink" placeholder="Lien code source" class="w-full mb-2 px-3 py-2 rounded bg-gray-600" />
            <button @click="saveEdit" class="bg-blue-600 px-4 py-2 rounded mr-2">💾 Sauvegarder</button>
            <button @click="editingId = null" class="bg-gray-500 px-4 py-2 rounded">❌ Annuler</button>
          </div>
          <div v-else>
            <h3 class="text-xl font-bold text-purple-400">{{ p.title }}</h3>
            <p class="text-gray-300">{{ p.description }}</p>
            <button @click="startEdit(p)" class="text-blue-400 mr-3">✏️ Modifier</button>
            <button @click="deleteProject(p.id)" class="text-red-400">❌ Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
