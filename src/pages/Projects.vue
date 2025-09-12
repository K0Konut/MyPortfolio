<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ProjectCard from '../components/ProjectCard.vue'

const projects = ref([])

onMounted(async () => {
  projects.value = []
  const querySnapshot = await getDocs(collection(db, "projects"))
  querySnapshot.forEach((docSnap) => {
    projects.value.push({ id: docSnap.id, ...docSnap.data() })
  })
})
</script>

<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden">
    <!-- tes bulles décoratives ici -->

    <section class="relative z-10 w-full py-28 text-center">
      <div class="container mx-auto px-6">
        <div class="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-purple-700/20">
          <h3 class="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6 tracking-tight">
            🚀 Mes Réalisations
          </h3>
          <p class="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes projets les plus marquants réalisés lors de formations ou à titre personnel.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="p in projects"
              :key="p.id"
              :project="p"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
