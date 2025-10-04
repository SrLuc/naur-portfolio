<template>
  <!-- Navbar -->
  <nav
    class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] flex justify-between items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md"
  >
    <!-- Botão voltar à esquerda -->
    <RouterLink
      to="/"
      class="flex items-center gap-1 text-amber-50 text-sm md:text-base hover:opacity-80 transition"
    >
      <span class="text-xl">←</span> Home
    </RouterLink>

    <!-- Links à direita -->
    <ul class="flex gap-6 md:gap-10 text-white text-sm md:text-base">
      <li>
        <RouterLink to="/projects" class="hover:opacity-80 transition"
          >Projects</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/services" class="hover:opacity-70"
          >Services</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/about" class="hover:opacity-80 transition"
          >About Me</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/blogs" class="hover:opacity-80 transition"
          >Blogs</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

const openModal = () => {
  console.log("Abrir modal");
};
</script>

<style scoped>
nav ul li,
nav a,
nav button {
  font-weight: 500;
}
</style>
