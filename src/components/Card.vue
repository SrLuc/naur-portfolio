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

div {
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

}

div:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

h2 {
  margin: 0 0 8px 0;
  font-size: 1.5em;
}

p {
  margin: 0;
  color: #ccc;
}


</style>
