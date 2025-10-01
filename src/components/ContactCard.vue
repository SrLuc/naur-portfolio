<template>
  <li
    :class="[
      'flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_' +
        hoverColor +
        '] hover:scale-[1.05]',
      bgColor,
    ]"
  >
    <div class="w-16 h-16 flex items-center justify-center mb-4">
      <img :src="icon" alt="" class="w-10 h-10 object-contain" />
    </div>
    <a
      :href="href"
      :target="target"
      :class="[
        'text-center font-light',
        textColor ? 'text-[textColor]' : 'text-white',
        'hover:underline',
      ]"
    >
      {{ label }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  href: String,
  bgColor: String,
  textColor: String,
  hoverColor: String,
  target: String,
});
</script>
