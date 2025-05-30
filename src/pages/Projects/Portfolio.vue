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
    <section class="relative z-10 container mx-auto py-32 px-6 text-white">
      <h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6">Portfolio Next.js - Vue d'ensemble</h1>
      <p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Un portfolio professionnel moderne avec des effets visuels avancés, construit comme une application web responsive.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16">
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Technologies Principales</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Next.js 15 (React)</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>CSS Modules</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Composants et Animations</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Custom Spotlight effect</li>
            <li>MagicButton component</li>
            <li>Dynamic imports</li>
            <li>Hover animations</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Outils de développement</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>TypeScript Config</li>
            <li>Sentry (monitoring d'erreurs)</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Déploiement</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Cloudflare</li>
            <li>Vercel (configuration alternative)</li>
            <li>Routing dynamique</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        <img src="/data/Code.png" alt="Code développement" class="rounded-xl shadow-lg max-w-sm">
        <img src="/data/Deployment.png" alt="Interface déploiement" class="rounded-xl shadow-lg max-w-sm">
        <img src="/favicon.ico" alt="Feedback utilisateur" class="rounded-xl shadow-lg max-w-sm">
      </div>

      <div class="text-center">
        <a
          href="https://github.com/K0Konut/MyPortfolio/"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition"
        >
          Voir code source ↗
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// page Next.js résumé style
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
</style>