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

    <!-- Page Content Placeholder -->
    <section class="relative z-10 container mx-auto py-32 text-center text-white">
      <h1 class="text-4xl font-bold text-gray-400">Contenu à venir...</h1>
    </section>
  </div>
</template>

<script setup>
// page vierge
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
