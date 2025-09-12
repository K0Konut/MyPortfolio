<template>
  <div
    class="group relative overflow-hidden border border-purple-400/20 rounded-3xl p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
  >
    <div
      class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"
    ></div>

    <h3
      class="text-2xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300"
    >
      {{ project.title }}
    </h3>

    <p class="text-gray-300 mt-4 text-base leading-relaxed">
      {{ project.description }}
    </p>

    <!-- Lien vers la page dynamique du projet -->
    <router-link
      :to="`/projects/${project.id}`"
      class="inline-flex items-center gap-2 mt-6 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-5 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition-all"
    >
      Voir plus
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M12.293 2.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414l-3.293 3.293a1 1 0 01-1.414-1.414l5-5z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
defineProps({ project: Object })
</script>
