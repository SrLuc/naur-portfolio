<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-10 bg-black text-white">
    <h1 class="text-4xl md:text-5xl font-bold mb-10">Projects</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <Card
          v-for="project in projects"
          :key="project.id"
          :title="project.name"
          :description="project.description || 'No description provided'"
      >
        <a
            :href="project.html_url"
            target="_blank"
            class="mt-4 text-cyan-400 underline"
        >
          View Project
        </a>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const projects = ref([])

// Substitua 'naur' pelo seu username do GitHub
const githubUsername = 'SrLuc'

async function fetchGitHubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`)
    const data = await response.json()
    // Opcional: filtra apenas projetos que você quer mostrar
    projects.value = data
        .filter(repo => !repo.fork) // ignora forks
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // ordena por atualização
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error)
  }
}

onMounted(() => {
  fetchGitHubProjects()
})
</script>
