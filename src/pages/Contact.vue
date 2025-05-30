<template>
  <section class="bg-gray-900 relative z-10 w-full py-28 text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div>
    <div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div>
    <div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div>
    <div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div>
    <div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>

    <div class="relative bg-gradient-to-br from-[#1e1e2f] via-gray-800 to-[#1a1a2a] rounded-3xl shadow-2xl px-10 py-20 max-w-3xl mx-auto border border-purple-700/30 backdrop-blur-md">
      <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-10">
        📬 Contactez-moi
      </h2>
      <form ref="form" @submit.prevent="sendEmail" class="space-y-6 text-left">
        <input
          name="from_name"
          type="text"
          required
          placeholder="Votre nom"
          class="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="from_email"
          type="email"
          required
          placeholder="Votre email"
          class="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Votre message"
          class="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg transition-all flex items-center justify-center"
        >
          <span v-if="!loading">Envoyer</span>
          <span v-else class="flex items-center gap-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            Envoi...
          </span>
        </button>
        <p v-if="successMessage" class="text-green-400 text-center">✅ Message envoyé avec succès !</p>
        <p v-if="errorMessage" class="text-red-400 text-center">❌ Une erreur est survenue. Réessayez plus tard.</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const loading = ref(false)
const successMessage = ref(false)
const errorMessage = ref(false)

const sendEmail = () => {
  loading.value = true
  successMessage.value = false
  errorMessage.value = false

  emailjs
    .sendForm(
      'service_mys6aj3',
      'template_irahm0i',
      form.value,
      'Ff6yINORfakg3WcI_'
    )
    .then(() => {
      loading.value = false
      successMessage.value = true
      form.value.reset()
    })
    .catch((error) => {
      loading.value = false
      errorMessage.value = true
      console.error('Erreur EmailJS :', error)
    })
}
</script>
