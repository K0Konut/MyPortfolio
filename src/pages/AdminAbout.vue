<script setup>
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/firebase"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { doc, getDoc, setDoc } from "firebase/firestore"

/* ====== Cloudinary ====== */
const CLOUD_NAME = "do4qbtm7b"          // <-- ton cloud name
const UPLOAD_PRESET = "portfolio_upload"// <-- unsigned preset
const CLOUD_FOLDER = "portfolio_costa"  // <-- dossier

const uploadToCloudinary = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
  const form = new FormData()
  form.append("file", file)
  form.append("upload_preset", UPLOAD_PRESET)
  form.append("folder", CLOUD_FOLDER)

  const res = await fetch(url, { method: "POST", body: form })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || "Upload Cloudinary échoué")
  return data.secure_url
}

/* ====== State ====== */
const user = ref(null)
const router = useRouter()

const photo = ref("")
const title = ref("")
const paragraphs = ref([])

const newFile = ref(null)
const preview = ref(null)

/* ====== Lifecycle ====== */
onMounted(async () => {
  onAuthStateChanged(auth, async (u) => {
    if (!u) return router.push("/login")
    user.value = u

    const snap = await getDoc(doc(db, "about", "info"))
    if (snap.exists()) {
      const data = snap.data()
      photo.value = data.photo || ""
      title.value = data.title || "👋 À propos de moi"
      paragraphs.value = data.paragraphs || []
    }
  })
})

/* ====== CRUD ====== */
const saveAbout = async () => {
  let photoUrl = photo.value

  if (newFile.value) {
    photoUrl = await uploadToCloudinary(newFile.value)
  }

  await setDoc(doc(db, "about", "info"), {
    photo: photoUrl,
    title: title.value,
    paragraphs: paragraphs.value
  })

  newFile.value = null
  preview.value = null
  alert("✅ Informations sauvegardées !")
}

/* Helpers */
const addParagraph = () => paragraphs.value.push("")
const removeParagraph = (i) => paragraphs.value.splice(i, 1)
const handleFile = (e) => {
  const file = e.target.files[0]
  if (!file) return
  newFile.value = file
  const reader = new FileReader()
  reader.onload = () => (preview.value = reader.result)
  reader.readAsDataURL(file)
}
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen px-6 py-20">
    <!-- Bouton retour -->
    <div class="mb-6">
      <router-link
        to="/admin"
        class="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium shadow-md"
      >
        ⬅️ Retour au menu Admin
      </router-link>
    </div>

    <div v-if="user" class="max-w-4xl mx-auto bg-gray-800/90 p-10 rounded-2xl text-white">
      <h1
        class="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        ⚙️ Admin — À propos
      </h1>

      <!-- Photo -->
      <div class="mb-6">
        <label class="block mb-2 font-semibold">📷 Photo de profil</label>
        <div class="flex flex-col items-center gap-4">
          <img v-if="preview || photo" :src="preview || photo" class="w-24 h-24 object-cover rounded-full border-4 border-purple-600" />
          <input type="file" accept="image/*" @change="handleFile" class="text-sm text-gray-300" />
        </div>
      </div>

      <!-- Title -->
      <div class="mb-6">
        <label class="block mb-2 font-semibold">🏷️ Titre</label>
        <input
          v-model="title"
          placeholder="Titre"
          class="w-full px-4 py-3 rounded-xl bg-gray-600 text-white placeholder-gray-400 outline-none"
        />
      </div>

      <!-- Paragraphs -->
      <div class="mb-6">
        <label class="block mb-2 font-semibold">📑 Paragraphes</label>
        <div v-for="(p, i) in paragraphs" :key="i" class="flex gap-2 mb-3">
          <textarea
            v-model="paragraphs[i]"
            placeholder="Texte..."
            class="flex-1 px-4 py-2 rounded-xl bg-gray-600 text-white placeholder-gray-400 outline-none"
          ></textarea>
          <button
            @click="removeParagraph(i)"
            class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
          >
            ❌
          </button>
        </div>
        <button
          @click="addParagraph"
          class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm"
        >
          ➕ Ajouter un paragraphe
        </button>
      </div>

      <!-- Save -->
      <div class="text-center">
        <button
          @click="saveAbout"
          class="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-blue-700 transition"
        >
          💾 Sauvegarder
        </button>
      </div>
    </div>
  </div>
</template>
