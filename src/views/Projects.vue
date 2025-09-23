<template>
  <div
    class="relative bg-gradient-to-b from-[#262019] via-[#594d3e] to-[#f28705] text-white min-h-screen p-6 overflow-hidden"
  >
    <!-- Fundo cósmico -->
    <div class="absolute inset-0 -z-10">
      <!-- Camada de estrelas finas -->
      <div
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] top-[-50%] left-[-50%] opacity-40 animate-[moveStars_100s_linear_infinite]"
      ></div>
      <!-- Grid geométrico (efeito holograma) -->
      <div
        class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
      ></div>
    </div>

    <Navbar />

    <!-- Título -->
    <h1 class="text-4xl font-bold mb-10 text-center z-10">Recent Projects</h1>

    <!-- Grid de projetos -->
    <div
      class="relative grid gap-6 z-10"
      style="
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: minmax(200px, auto);
        grid-auto-flow: dense;
      "
    >
      <RouterLink
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="transform transition duration-500"
      >
        <Card
          :id="project.slug"
          :title="project.title"
          :description="project.description"
          :date="project.date"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import projects from "../utils/projects.js";
import Navbar from "../components/Navbar.vue";
</script>

<style>
@keyframes moveStars {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(500px, 500px);
  }
}
</style>
