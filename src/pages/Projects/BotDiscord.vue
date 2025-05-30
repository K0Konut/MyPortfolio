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

    <!-- Bot Discord Project Overview -->
    <section class="relative z-10 container mx-auto py-32 px-6 text-white">
      <h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6">Bot Discord Python - Vue d'ensemble</h1>
      <p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Un bot Discord multifonction codé en Python. Il gère la modération, les jeux interactifs, les réponses automatisées et bien plus encore.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16">
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Fonctionnalités</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Modération (ban, kick, mute)</li>
            <li>Commandes personnalisées</li>
            <li>Jeux (quiz, devinettes)</li>
            <li>Logs automatiques</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Stack Technique</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Python</li>
            <li>Discord.py</li>
            <li>dotenv</li>
            <li>Replit/Heroku</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Sécurité</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Permissions par rôle</li>
            <li>Anti-spam</li>
            <li>Logs d'activité</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Utilisation</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Installation simple</li>
            <li>Commandes préfixées (!, ?)</li>
            <li>Support multi-serveur</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        <img src="/data/discord-code.png" alt="Code Python bot Discord" class="rounded-xl shadow-lg max-w-sm">
        <img src="/data/discord-output.png" alt="Interaction bot Discord" class="rounded-xl shadow-lg max-w-sm">
      </div>

      <div class="text-center">
        <a
          href="#"
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
// bot discord python
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
