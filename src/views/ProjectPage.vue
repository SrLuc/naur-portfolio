<template>
  <div>
    <!-- Se o projeto existir, renderiza -->
    <component :is="projectComponent" v-if="projectComponent" />
    <!-- Se não existir, renderiza mensagem de erro -->
    <p v-else>Project not found.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectComponents } from '../utils/components.ts'

const route = useRoute()

const projectComponent = computed(() => {
  // Padroniza slug da rota para lowercase e sem espaços
  const slug = route.params.slug.toLowerCase().replace(/\s+/g, '')
  return projectComponents[slug] || null
})
</script>
