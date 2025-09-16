<script setup>
import { ref, onMounted } from "vue"
import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"

const about = ref(null)

onMounted(async () => {
  const snap = await getDoc(doc(db, "about", "info"))
  if (snap.exists()) {
    about.value = snap.data()
  }
})
</script>

<template>
  <div class="bg-gray-900 relative z-10 w-full py-28 text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>

    <div
      v-if="about"
      class="relative bg-gradient-to-br from-[#1e1e2f] via-gray-800 to-[#1a1a2a] rounded-3xl shadow-2xl px-10 py-20 max-w-5xl mx-auto border border-purple-700/30 backdrop-blur-md"
    >
      <img
        :src="about.photo"
        alt="Photo de profil"
        class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-600 shadow-md mb-8"
      />
      <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
        {{ about.title }}
      </h2>
      <p
        v-for="(p, i) in about.paragraphs"
        :key="i"
        class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
      >
        {{ p }}
      </p>
    </div>

    <div v-else class="text-gray-400">Chargement...</div>
  </div>
</template>
