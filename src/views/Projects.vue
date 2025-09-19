<template>
  <div class="min-h-screen bg-black text-white p-6">

    <!--NAVBAR PARA VOLTAR PARA O INICIO COM A SETA-->
    <nav>
      <ul class="flex justify-start gap-10 text-lg mb-10">
        <li>
          <RouterLink to="/" class="no-underline hover:opacity-70 flex items-center">
            <span class="text-2xl mr-2">←</span> Home
          </RouterLink>
        </li>
      </ul>
    </nav>
    <h1 class="text-4xl font-bold mb-10 text-center">Projects</h1>

    <div
        class="grid gap-6"
        style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); grid-auto-rows: minmax(200px, auto); grid-auto-flow: dense;"
    >
      <RouterLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
      >
        <Card :title="project.title" :description="project.description"/>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue'

const projects = [
  {
    slug: 'HTML Email Development',
    title: 'HTML Email Development',
    description: 'Designed and coded responsive HTML email templates, optimized for all devices and major clients, ensuring accessibility, fast loading, and brand consistency'
  },
  {slug: 'project-two', title: 'Project Two', description: 'Another demo project'}
]
</script>
