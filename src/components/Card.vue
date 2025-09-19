<template>
  <div>
    <h2> {{ title }}</h2>
    <p>{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

<style scoped>
/* Pode adicionar borda mais sutil ou gradiente leve */
</style>
