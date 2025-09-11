<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden flex items-center justify-center px-4">
    <!-- Bulles décoratives -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>

    <!-- Formulaire -->
    <div class="relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-md border border-purple-700/20 rounded-3xl shadow-2xl p-8">
      <h2 class="text-3xl font-extrabold text-center text-white mb-6">
        🔐 Connexion Admin
      </h2>

      <div class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          @click="login"
          class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
        >
          Se connecter
        </button>

        <p v-if="error" class="text-red-400 text-sm text-center">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const login = async () => {
  error.value = null
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/admin') // Redirige vers une page admin (tu peux adapter)
  } catch (err) {
    error.value = 'Identifiants incorrects.'
    console.error(err)
  }
}
</script>

<style scoped>
</style>
