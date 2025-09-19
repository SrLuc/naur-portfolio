<template>


  <div class="min-h-screen bg-black text-white p-6">

    <div>
      <div
          ref="stars"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] top-[-50%] left-[-50%] animate-[moveStars_60s_linear_infinite] pointer-events-none"
      ></div>
      <div
          ref="stars2"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 bg-[length:2px_2px] top-[-50%] left-[-50%] animate-[moveStars_120s_linear_infinite] pointer-events-none"
      ></div>
      <div
          ref="stars3"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 bg-[length:3px_3px] top-[-50%] left-[-50%] animate-[moveStars_180s_linear_infinite] pointer-events-none"
      ></div>
    </div>

    <!-- Navbar -->
    <nav class="relative z-10"> <!-- garante que fique acima do fundo -->
      <ul class="flex justify-start gap-10 text-lg mb-10">
        <li>
          <RouterLink to="/" class="no-underline hover:opacity-70 flex items-center">
            <span class="text-2xl mr-2">←</span> Home
          </RouterLink>
        </li>
      </ul>
    </nav>

    <h1 class="text-4xl font-bold mb-10 text-center">Recent Projects</h1>

    <!-- Fundo de estrelas -->
    <div>
      <div
          ref="stars"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] top-[-50%] left-[-50%] animate-[moveStars_60s_linear_infinite]"
      ></div>
      <div
          ref="stars2"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 bg-[length:2px_2px] top-[-50%] left-[-50%] animate-[moveStars_120s_linear_infinite]"
      ></div>
      <div
          ref="stars3"
          class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 bg-[length:3px_3px] top-[-50%] left-[-50%] animate-[moveStars_180s_linear_infinite]"
      ></div>
    </div>

    <div
        class="grid gap-6"
        style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); grid-auto-rows: minmax(200px, auto); grid-auto-flow: dense;"
    >
      <RouterLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
      >
        <Card :id="project.slug" :title="project.title" :description="project.description" :date="project.date"/>
      </RouterLink>
    </div>

  </div>

</template>

<script setup>
import Card from '../components/Card.vue'
import projects from "../utils/projects.js"

</script>
