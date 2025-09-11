<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    if (u) {
      user.value = u
    } else {
      router.push('/login')
    }
  })
})
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden px-4 py-24 flex items-center justify-center">
    <!-- Bulles décoratives -->
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-2xl top-[50%] left-[60%] z-0"></div>
    <div class="absolute w-[250px] h-[250px] bg-pink-500 opacity-10 rounded-full blur-2xl bottom-[10%] right-[20%] z-0"></div>

    <!-- Contenu sécurisé -->
    <div v-if="user" class="relative z-10 w-full max-w-3xl bg-gray-800/90 backdrop-blur-md border border-purple-700/20 rounded-3xl shadow-2xl p-10 text-center text-white">
      <h1 class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        Bienvenue, {{ user.email }}
      </h1>
      <p class="text-gray-300 text-lg mb-8">
        Vous êtes connecté à l’espace administrateur.
      </p>

      <!-- Zone admin -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-bold text-blue-400 mb-2">📁 Gérer les projets</h3>
          <p class="text-gray-300">Ajoutez, modifiez ou supprimez les projets affichés dans votre portfolio.</p>
        </div>
        <div class="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-bold text-blue-400 mb-2">⚙️ Paramètres</h3>
          <p class="text-gray-300">Prochainement : personnalisation de l’interface, thème, etc.</p>
        </div>
      </div>
    </div>
  </div>
</template>
