<script setup>
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/firebase"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { collection, addDoc } from "firebase/firestore"

/* ===== Cloudinary ===== */
const CLOUD_NAME = "do4qbtm7b"
const UPLOAD_PRESET = "portfolio_upload"
const CLOUD_FOLDER = "portfolio_costa"

const uploadToCloudinary = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
  const form = new FormData()
  form.append("file", file)
  form.append("upload_preset", UPLOAD_PRESET)
  form.append("folder", CLOUD_FOLDER)

  const res = await fetch(url, { method: "POST", body: form })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || "Upload échoué")
  return data.secure_url
}

/* ===== State ===== */
const user = ref(null)
const router = useRouter()

const newTitle = ref("")
const newDescription = ref("")
const newSourceLink = ref("")
const newSections = ref([])
const newImageFiles = ref([])
const newImagePreviews = ref([])

/* Auth */
onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    if (!u) router.push("/login")
    else user.value = u
  })
})

/* Helpers images */
function pushFilesWithPreview(files, filesRef, previewsRef) {
  files.forEach((file) => {
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
const removeAddImage = (i) => {
  newImageFiles.value.splice(i, 1)
  newImagePreviews.value.splice(i, 1)
}

/* CRUD Add */
const addProject = async () => {
  if (!newTitle.value || !newDescription.value) return

  const urls = []
  for (const f of newImageFiles.value) {
    urls.push(await uploadToCloudinary(f))
  }

  await addDoc(collection(db, "projects"), {
    title: newTitle.value,
    description: newDescription.value,
    sourceLink: newSourceLink.value || null,
    sections: newSections.value,
    images: urls,
    createdAt: new Date()
  })

  newTitle.value = ""
  newDescription.value = ""
  newSourceLink.value = ""
  newSections.value = []
  newImageFiles.value = []
  newImagePreviews.value = []
}

const addSection = () => newSections.value.push({ title: "", items: [] })
const addItem = (s) => s.items.push("")
const removeSection = (i) => newSections.value.splice(i, 1)
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-20 text-white">
    <div v-if="user" class="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl">
      <h1 class="text-3xl font-bold mb-8 text-blue-400">➕ Ajouter un projet</h1>

      <input v-model="newTitle" placeholder="Titre du projet" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />
      <textarea v-model="newDescription" placeholder="Description" class="w-full mb-3 px-4 py-2 rounded bg-gray-600"></textarea>
      <input v-model="newSourceLink" placeholder="Lien code source" class="w-full mb-3 px-4 py-2 rounded bg-gray-600" />

      <!-- Images -->
      <div class="mb-4">
        <label class="block mb-2 font-semibold">📷 Images</label>
        <div class="border-2 border-dashed border-gray-500 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-600/30 transition"
             @dragover.prevent @drop.prevent="handleDropAdd">
          <input type="file" class="hidden" multiple @change="handleFilesAdd" />
          <p class="text-gray-400">Cliquez ou glissez vos images ici</p>
        </div>
        <div class="flex gap-2 flex-wrap mt-3">
          <div v-for="(img, i) in newImagePreviews" :key="i" class="relative">
            <img :src="img" class="w-20 h-20 object-cover rounded" />
            <button @click="removeAddImage(i)" class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6">✕</button>
          </div>
        </div>
      </div>

      <!-- Sections -->
      <div>
        <h3 class="mb-2">📑 Sections</h3>
        <div v-for="(s, si) in newSections" :key="si" class="border p-3 rounded mb-3 bg-gray-700">
          <input v-model="s.title" placeholder="Titre section" class="w-full mb-2 px-2 py-1 rounded bg-gray-600" />
          <div v-for="(item, ii) in s.items" :key="ii" class="flex gap-2 mb-1">
            <input v-model="s.items[ii]" class="flex-1 px-2 py-1 rounded bg-gray-600" />
            <button @click="s.items.splice(ii,1)" class="bg-red-500 px-2 rounded">❌</button>
          </div>
          <button @click="addItem(s)" class="text-blue-400 text-sm">➕ Ajouter élément</button>
        </div>
        <button @click="addSection" class="bg-green-500 px-3 py-1 rounded text-sm">➕ Ajouter une section</button>
      </div>

      <div class="mt-6">
        <button @click="addProject" class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">
          🚀 Ajouter
        </button>
      </div>
    </div>
  </div>
</template>
