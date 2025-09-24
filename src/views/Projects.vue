<template>
  <div class="min-h-screen relative">
    <!-- Container principal com gradiente -->
    <div
        class="min-h-screen bg-gradient-to-b from-[var(--color-medium)] via-[var(--color-light)] to-[var(--color-primary)] text-[var(--color-dark)] p-6 relative z-0"
    >
      <!-- Montanhas no fundo - ABSOLUTE com altura garantida -->
      <div class="absolute bottom-0 left-0 right-0 h-1/2 -z-10">
        <svg
            class="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
          <path
              fill="var(--color-medium)"
              fill-opacity="0.3"
              d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,256C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
          ></path>
          <path
              fill="var(--color-dark)"
              fill-opacity="0.7"
              d="M0,288L80,277.3C160,267,320,245,480,218.7C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <!-- Conteúdo -->
      <div class="relative z-10">
        <Navbar />
        <h1 class="text-4xl font-bold mb-10 text-center text-white drop-shadow-md">
          Recent Projects
        </h1>

        <div
            class="grid gap-6"
            style="
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: minmax(200px, auto);
          "
        >
          <RouterLink
              v-for="project in projects"
              :key="project.slug"
              :to="`/projects/${project.slugClean}`"
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
    </div>
  </div>
</template>
<script setup>
import Card from "../components/Card.vue";
import projects from "../utils/projects.js";
import Navbar from "../components/Navbar.vue";
</script>
