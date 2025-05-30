<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden">
    <!-- Decorative Background Shapes -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div>
    <div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div>
    <div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div>
    <div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div>
    <div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>

    <!-- Projects Section -->
    <section class="relative z-10 w-full py-28 text-center">
      <div class="container mx-auto px-6">
        <div class="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-purple-700/20">
          <h3 class="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6 tracking-tight">
            🚀 Mes Réalisations
          </h3>
          <p class="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes projets les plus marquants réalisés lors de formations ou à titre personnel. Ils reflètent ma passion pour le code, le design et la recherche de solutions utiles et performantes.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
  {
    id: 1,
    title: 'Portfolio Web',
    description: 'Développement de mon site personnel avec Vue.js, Tailwind CSS et animations interactives. Responsive et moderne.',
    link: '/projects/portfolio',
  },
  {
    id: 2,
    title: 'Bot Discord',
    description: "Création d'un bot multifonction en Node.js pour modération, jeux et commandes personnalisées.",
    link: '/projects/botdiscord',
  },
  {
    id: 3,
    title: 'Site Calculatrice',
    description: "Application web permettant des calculs simples et scientifiques, développée avec HTML, CSS et JavaScript.",
    link: '/projects/calculatorweb',
  },
  {
    id: 4,
    title: 'Radar de recul',
    description: "Prototype d'un radar de recul pour véhicule, intégrant capteurs à ultrasons et affichage de distance.",
    link: '/projects/radar',
  },
];
</script>
