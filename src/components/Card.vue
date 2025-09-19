<template>
  <div
      class="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
  >
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-300">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
