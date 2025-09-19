<template>
  <div class="min-h-screen bg-black text-white p-6">
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
  {slug: 'project-one', title: 'Project One', description: 'Demo project using MDX'},
  {slug: 'project-two', title: 'Project Two', description: 'Another demo project'},
  {slug: 'project-three', title: 'Project Three', description: 'Yet another cool demo'},
  {slug: 'project-four', title: 'Project Four', description: 'Minimalistic modern design'},
  {slug: 'project-five', title: 'Project Five', description: 'Dynamic layout example'},
]
</script>
