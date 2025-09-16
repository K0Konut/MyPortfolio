<script setup>
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const user = ref(null)
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    if (!u) {
      router.push("/login")
    } else {
      user.value = u
    }
  })
})

const goTo = (path) => {
  router.push(path)
}
</script>

<template>
  <!-- Conteneur fixe plein écran -->
  <div class="fixed inset-0 dark bg-gray-900 flex items-center justify-center overflow-hidden">
    <div
      v-if="user"
      class="max-w-3xl w-full bg-gray-800/90 p-12 rounded-2xl text-white shadow-2xl border border-gray-700"
    >
      <h1
        class="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        ⚙️ Panneau d’Administration
      </h1>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Ajouter projet -->
        <button
          @click="goTo('/admin/add')"
          class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition"
        >
          ➕ Ajouter un projet
        </button>

        <!-- Éditer projets -->
        <button
          @click="goTo('/admin/edit')"
          class="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition"
        >
          ✏️ Gérer mes projets
        </button>

        <!-- Gérer About -->
        <button
          @click="goTo('/admin/about')"
          class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition"
        >
          👤 Gérer la page "À propos"
        </button>
      </div>
    </div>
  </div>
</template>
