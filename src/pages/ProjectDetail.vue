<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

const route = useRoute()
const project = ref(null)

onMounted(async () => {
  const id = route.params.id
  const docRef = doc(db, "projects", id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    project.value = { id: docSnap.id, ...docSnap.data() }
  }
})
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden">
    <!-- Bulles décoratives -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>

    <!-- Contenu projet -->
    <section v-if="project" class="relative z-10 container mx-auto py-32 px-6 text-white">
      <!-- Titre -->
      <h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6">
        {{ project.title }}
      </h1>

      <!-- Description -->
      <p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
        {{ project.description }}
      </p>

      <!-- Grille de sections (features, stack, etc.) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16">
        <div v-if="project.features">
          <h3 class="text-xl font-bold text-purple-400 mb-2">Fonctionnalités</h3>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="(f, i) in project.features" :key="i">{{ f }}</li>
          </ul>
        </div>

        <div v-if="project.stack">
          <h3 class="text-xl font-bold text-purple-400 mb-2">Stack Technique</h3>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="(s, i) in project.stack" :key="i">{{ s }}</li>
          </ul>
        </div>

        <div v-if="project.security">
          <h3 class="text-xl font-bold text-purple-400 mb-2">Sécurité</h3>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="(sec, i) in project.security" :key="i">{{ sec }}</li>
          </ul>
        </div>

        <div v-if="project.usage">
          <h3 class="text-xl font-bold text-purple-400 mb-2">Utilisation</h3>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="(u, i) in project.usage" :key="i">{{ u }}</li>
          </ul>
        </div>
      </div>

      <!-- Image si dispo -->
      <div v-if="project.imageUrl" class="flex justify-center mb-12">
        <img :src="project.imageUrl" :alt="project.title" class="rounded-xl shadow-lg max-w-lg" />
      </div>

      <!-- Lien code source -->
      <div class="text-center" v-if="project.sourceLink">
        <a
          :href="project.sourceLink"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition"
        >
          Voir code source ↗
        </a>
      </div>
    </section>

    <!-- Chargement / projet introuvable -->
    <section v-else class="relative z-10 text-center text-gray-400 py-32">
      Chargement du projet...
    </section>
  </div>
</template>
