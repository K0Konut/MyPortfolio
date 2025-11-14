<template>
  <div class="dark bg-gray-900 min-h-screen relative overflow-hidden">
    <!-- Global Background Shapes -->
    <div class="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"></div>
    <div class="absolute w-[400px] h-[400px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px] z-0"></div>
    <div class="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 rounded-full blur-2xl top-[40%] left-[60%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-2xl top-[10%] right-[20%] z-0"></div>
    <div class="absolute w-[250px] h-[250px] bg-green-400 opacity-10 rounded-full blur-2xl bottom-[30%] left-[10%] z-0"></div>
    <div class="absolute w-[150px] h-[150px] bg-red-400 opacity-10 rounded-full blur-2xl bottom-[10%] right-[40%] z-0"></div>
    <div class="absolute w-[180px] h-[180px] bg-indigo-400 opacity-10 rounded-full blur-2xl top-[25%] right-[10%] z-0"></div>
    <div class="absolute w-[220px] h-[220px] bg-cyan-300 opacity-10 rounded-full blur-2xl top-[60%] left-[20%] z-0"></div>
    <div class="absolute w-[200px] h-[200px] bg-orange-400 opacity-10 rounded-full blur-2xl bottom-[5%] left-[50%] z-0"></div>

    <!-- Page Content -->
    <section class="relative z-10 container mx-auto py-32 text-center animate-fade-in text-white">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Maskulov Costa
      </h1>
      <h2 class="text-2xl md:text-3xl mb-4 text-gray-300">
        Étudiant en ingénierie informatique
      </h2>
      <p class="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
        Ce qui me motive au quotidien, c'est de comprendre comment fonctionnent les technologies qui nous entourent, et surtout, de pouvoir créer des solutions utiles et concrètes grâce à l’informatique.
      </p>
      <router-link
        to="/projects"
        class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all">
        🌟 Découvrir mes projets
      </router-link>
    </section>

    <section class="relative z-10 container mx-auto py-20 grid md:grid-cols-3 gap-8 text-center">
      <div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-blue-400">Ma Vision</h3>
        <p class="text-gray-300">Je crois que l'informatique est un outil puissant pour améliorer la vie quotidienne. Ma passion est de transformer les idées en applications concrètes et utiles.</p>
      </div>
      <div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-blue-400">Mes Valeurs</h3>
        <p class="text-gray-300">Rigueur, curiosité, et collaboration sont au cœur de ma manière de travailler. Je m'efforce de toujours apprendre et de repousser les limites de mes compétences.</p>
      </div>
      <div class="bg-gray-800 rounded-2xl shadow-xl p-8 transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-blue-400">Objectifs</h3>
        <p class="text-gray-300">Créer des projets qui ont du sens, avoir un impact positif à travers la technologie, et évoluer dans un environnement stimulant aux côtés de personnes inspirantes.</p>
      </div>
    </section>

    <section class="relative z-10 w-full py-24 text-center">
    <div class="container mx-auto px-6">
    <div class="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 w-full max-w-5xl mx-auto border border-purple-700/20">
      <h3 class="text-4xl md:text-5xl font-extrabold text-white mb-6">📄 Mon CV</h3>
      <p class="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Explorez mon parcours académique, mes compétences techniques et mes expériences professionnelles détaillées à travers mon CV.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/data/CV-FR.pdf"
          download="CV-FR.pdf"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Télécharger le CV
        </a>
        <a
          href="/data/CV-FR.pdf"
          target="_blank"
          class="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-400 hover:text-white hover:border-white font-semibold py-3 px-8 rounded-full transition-all"
        >
          📖 Consulter en ligne
        </a>
      </div>
      </div>
      </div>
    </section>


    <section class="relative z-10 container mx-auto py-20">
      <h2 class="text-3xl font-bold text-center mb-12 text-white">Compétences</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">HTML</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">CSS</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">JavaScript</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Java</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Python</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">C</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">C++</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Git</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">GitHub</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Travail d'équipe</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Gestion de projet</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Vue.js</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Gestion du stress</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Relation client</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Bonne Communication</div>
        <div class="bg-gray-800 p-4 rounded-xl shadow-md text-white transition duration-300 hover:text-purple-400 border border-transparent hover:border-purple-500">Bonne Organisation</div>
      </div>
    </section>

    <section class="relative z-10 bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Un projet en tête ?</h2>
      <p class="text-lg mb-6">N'hésitez pas à me contacter, je suis disponible pour des collaborations ou des opportunités professionnelles.</p>
      <a href="mailto:maskulov@et.esiea.fr" class="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition">Me contacter</a>
    </section>
  </div>
</template>

<script setup>
// Aucune logique nécessaire ici pour l'instant
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
