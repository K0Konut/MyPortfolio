<template>
  <header class="bg-gray-900 text-white shadow-xl sticky top-0 z-50 backdrop-blur-md bg-opacity-80 transition-all duration-500">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
      <router-link
        to="/"
        class="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text tracking-tight hover:brightness-110 transition duration-300"
      >
        Maskulov Costa
      </router-link>

      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li>
          <router-link
            to="/"
            class="group relative hover:text-blue-400 transition duration-300"
          >
            Accueil
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects"
            class="group relative hover:text-blue-400 transition duration-300"
          >
            Projets
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="group relative hover:text-blue-400 transition duration-300"
          >
            À propos
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="group relative hover:text-blue-400 transition duration-300"
          >
            Contact
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full block"></span>
          </router-link>
        </li>
      </ul>

      <div class="md:hidden relative">
        <button @click="menuOpen = !menuOpen" class="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          v-if="menuOpen"
          class="absolute right-0 mt-4 bg-gray-800 text-white rounded-xl py-4 px-6 w-48 shadow-lg z-50"
        >
          <router-link to="/" class="block py-2 hover:text-blue-400">Accueil</router-link>
          <router-link to="/projects" class="block py-2 hover:text-blue-400">Projets</router-link>
          <router-link to="/about" class="block py-2 hover:text-blue-400">À propos</router-link>
          <router-link to="/contact" class="block py-2 hover:text-blue-400">Contact</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
</script>

<style scoped>
</style>
