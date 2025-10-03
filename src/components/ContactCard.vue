<template>
  <li
    :class="[
      'flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_' +
        hoverColor +
        '] hover:scale-[1.05]',
      bgColor,
    ]"
  >
    <img :src="icon" alt="" class="w-18 h- object-contain" />
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
