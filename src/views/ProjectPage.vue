<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-6">
    <main class="max-w-3xl mx-auto space-y-8">
      <!-- Título principal -->
      <h1 class="text-4xl font-bold text-gray-800">{{ title }}</h1>

      <!-- Conteúdo do Markdown -->
      <div v-html="content" class="markdown-body"></div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const content = ref('')
const title = ref('')

onMounted(async () => {
  const slug = route.params.slug
  try {
    const res = await fetch(`/projects/${slug}.md`)
    if (!res.ok) throw new Error('File not found')
    const markdown = await res.text()
    content.value = marked(markdown)

    const firstLine = markdown.split('\n').find(line => line.startsWith('# '))
    title.value = firstLine ? firstLine.replace(/^#\s+/, '') : slug
  } catch (err) {
    content.value = '<p>Project not found.</p>'
    title.value = 'Error'
  }
})
</script>

<style scoped>

</style>
