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
import { ref, onMounted } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  title: String,
  description: String,
  date: String,
  views: { type: Number, default: 0 },
});

// estado interno
const localViews = ref(props.views);
const storageKey = `card-views-${props.id}`;

// carrega views
onMounted(() => {
  const saved = localStorage.getItem(storageKey);
  if (saved !== null) {
    localViews.value = parseInt(saved);
  }
});

// glow do mouse
const glowX = ref(0);
const glowY = ref(0);
const glowStyle = ref({});

function handleMouseMove(e) {
  const card = e.currentTarget.getBoundingClientRect();
  glowX.value = e.clientX - card.left;
  glowY.value = e.clientY - card.top;

  glowStyle.value = {
    background: `
      radial-gradient(
        400px circle at ${glowX.value}px ${glowY.value}px,
        rgba(242,135,5,0.15),
        rgba(89,77,62,0.05) 60%
      )
    `,
    backdropFilter: "blur(6px)",
  };
}

function resetGlow() {
  glowStyle.value = { backdropFilter: "blur(6px)" };
}

// views
function incrementViews() {
  localViews.value++;
  localStorage.setItem(storageKey, localViews.value);
}
</script>

<style scoped>
.card {
  position: relative;
  background: rgba(17, 17, 17, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  color: #fff;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 30px rgba(242, 135, 5, 0.25);
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin-bottom: 12px;
  color: #a6a6a6;
}

h2 {
  margin: 0 0 10px 0;
  font-size: 1.6em;
  font-weight: 600;
  color: #f2f2f2;
}

p {
  margin: 0 0 16px 0;
  color: #ddd;
  line-height: 1.4;
}

.read-more {
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s, transform 0.2s;
  color: #ffff;
}

.read-more:hover {
  color: #fff;
  transform: translateX(4px);
}
</style>
