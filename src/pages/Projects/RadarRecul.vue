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

    <!-- Radar Project Overview -->
    <section class="relative z-10 container mx-auto py-32 px-6 text-white">
      <h1 class="text-3xl md:text-4xl font-extrabold text-center text-purple-400 mb-6">Radar de Recul - Vue d'ensemble</h1>
      <p class="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Système embarqué de détection de distance à l'aide d'un capteur à ultrasons HC-SR04, d'une carte STM32, d'un buzzer pour l'alerte sonore, et d'un affichage LED pour visualiser la proximité.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-200 mb-16">
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Fonctionnalités</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Mesure de distance en temps réel</li>
            <li>Signal sonore adapté à la distance</li>
            <li>Affichage LED de l'alerte</li>
            <li>Portée précise jusqu'à 2m</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Matériel Utilisé</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>STM32 Blue Pill</li>
            <li>Capteur HC-SR04</li>
            <li>LED RGB et buzzer</li>
            <li>Alimentation 5V</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Code & Firmware</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>STM32CubeIDE</li>
            <li>Langage C embarqué</li>
            <li>Timers et interruptions</li>
            <li>Mesure d'impulsions</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-purple-400 mb-2">Objectifs</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Comprendre les capteurs</li>
            <li>Programmer un microcontrôleur</li>
            <li>Assembler une chaîne d'alerte</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        <img src="/data/radar-led.jpg" alt="Afficheur LED radar" class="rounded-xl shadow-lg max-w-sm">
        <img src="/data/radar-stm.jpg" alt="STM32 et capteur" class="rounded-xl shadow-lg max-w-sm">
      </div>

      <div class="text-center">
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl transition"
        >
          Voir code ou documentation ↗
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// radar de recul STM32
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
