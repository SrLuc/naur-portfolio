<template>
  <div
      class="card"
      @mousemove="handleMouseMove"
      @mouseleave="resetGlow"
      @click="incrementViews"
      :style="glowStyle"
  >
    <div class="card-header">
      <span class="date">{{ date }}</span>
      <span class="views">{{ localViews }} views</span>
    </div>

    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <slot></slot>

    <button @click.stop="incrementViews" class="read-more">Read More →</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const props = defineProps({
  id: { type: String, required: true }, // deve ser único por card
  title: String,
  description: String,
  date: String,
  views: { type: Number, default: 0 },
})

// estado interno do card
const localViews = ref(props.views)

// chave única para este card
const storageKey = `card-views-${props.id}`

// lê o valor do localStorage ao montar
onMounted(() => {
  const saved = localStorage.getItem(storageKey)
  if (saved !== null) {
    localViews.value = parseInt(saved)
  }
})

// glow
const glowX = ref(0)
const glowY = ref(0)
const glowStyle = ref({})

function handleMouseMove(e) {
  const card = e.currentTarget.getBoundingClientRect()
  glowX.value = e.clientX - card.left
  glowY.value = e.clientY - card.top

  glowStyle.value = {
    background: `
      radial-gradient(
        300px circle at ${glowX.value}px ${glowY.value}px,
        rgba(255,255,255,0.12),
        transparent 60%
      )
    `,
    backdropFilter: "blur(8px)",
  }
}

function resetGlow() {
  glowStyle.value = { backdropFilter: "blur(8px)" }
}

// incrementa apenas o card atual
function incrementViews() {
  localViews.value++
  localStorage.setItem(storageKey, localViews.value)
}
</script>

<style scoped>
.card {
  position: relative;
  background: rgba(17, 17, 17, 0.6);
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s, background 0.1s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: #fff;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.6);
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85em;
  margin-bottom: 8px;
  color: #aaa;
}

h2 {
  margin: 0 0 8px 0;
  font-size: 1.5em;
}

p {
  margin: 0 0 16px 0;
  color: #ddd;
}

.read-more {
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
  color: whitesmoke;
}

.read-more:hover {
  color: #80c0ff;
}
</style>
