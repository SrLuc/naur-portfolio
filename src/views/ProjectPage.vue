<template>
  <div>
    <main>
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
    </main>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {marked} from 'marked'

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

    const firstLine = markdown.split('\n')[0]
    title.value = firstLine.replace(/^#\s+/, '') || slug
  } catch (err) {
    content.value = 'Project not found.'
    title.value = 'Error'
  }
})
</script>
