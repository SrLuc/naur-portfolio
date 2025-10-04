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
        <h3 class="text-2xl font-bold mb-3 text-white text-center">
          {{ title }}
        </h3>
        <p class="text-white mb-4 text-center">{{ description }}</p>
      </div>
      <div>
        <div class="flex justify-center">
          <button
            class="px-5 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition"
          >
            Discover more
          </button>
        </div>
      </div>
      <!-- Service Image -->
      <img v-if="image" :src="image" alt="" class="w-full" />
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
