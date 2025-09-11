<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { inject } from "@vercel/analytics";
inject(); // Active Vercel Analytics
</script>
