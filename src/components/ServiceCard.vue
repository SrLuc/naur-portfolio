<template>
  <div
    :class="[
      'flex flex-col rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-2',
      color,
    ]"
  >
    <!-- Card Content -->
    <div class="p-3 flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-3 text-white">{{ title }}</h3>
        <p class="text-white mb-4">{{ description }}</p>
      </div>
      <div>
        <button
          class="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Discover more
        </button>
      </div>
      <!-- Service Image -->
      <img v-if="image" :src="image" alt="" class="w-full h-70" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String, // optional
  color: {
    type: String,
    default: "bg-[#f28705]", // default color
  },
});
</script>
