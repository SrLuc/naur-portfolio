<template>
  <div
      class="card"
      @click="incrementViews"
  >
    <!-- Indicador de visualizações em destaque -->
    <div v-if="localViews > 10" class="popular-badge">🔥 Popular</div>

    <!-- Conteúdo do card -->
    <div class="card-content">
      <div class="card-header">
        <span class="date">{{ formattedDate }}</span>
        <span class="views">
          <span class="eye-icon">👁️</span>
          {{ localViews }} {{ localViews === 1 ? 'view' : 'views' }}
        </span>
      </div>

      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

      <!-- Slot para conteúdo adicional -->
      <slot></slot>

      <button @click.stop="incrementViews" class="read-more">
        Read More
        <span class="arrow">→</span>
      </button>
    </div>

    <!-- Efeito de borda animada mais suave -->
    <div class="border-effect"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

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

// Formata a data
const formattedDate = computed(() => {
  if (!props.date) return '';
  const date = new Date(props.date);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
});

// carrega views
onMounted(() => {
  const saved = localStorage.getItem(storageKey);
  if (saved !== null) {
    localViews.value = parseInt(saved);
  }
});

// views com feedback visual
function incrementViews(event) {
  localViews.value++;
  localStorage.setItem(storageKey, localViews.value);

  // Feedback visual temporário
  const card = event.currentTarget;
  card.style.transform = 'scale(0.99)';
  setTimeout(() => {
    card.style.transform = '';
  }, 150);
}
</script>

<style scoped>
.card {
  position: relative;
  background: rgba(17, 17, 17, 0.7);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow:
      0 4px 15px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
  color: #fff;
  cursor: pointer;
  border: 1px solid transparent;
}

.card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow:
      0 8px 25px rgba(242, 135, 5, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  border-color: rgba(242, 135, 5, 0.1);
}

.card-content {
  position: relative;
  z-index: 2;
}

.popular-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.7em;
  font-weight: 600;
  animation: gentle-pulse 3s infinite;
  z-index: 3;
}

@keyframes gentle-pulse {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85em;
  margin-bottom: 16px;
  color: #a6a6a6;
}

.date {
  background: rgba(242, 135, 5, 0.08);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  color: #f28705;
  transition: all 0.3s ease;
}

.card:hover .date {
  background: rgba(242, 135, 5, 0.15);
}

.views {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85em;
  transition: all 0.3s ease;
}

.card:hover .views {
  color: #d0d0d0;
}

.eye-icon {
  font-size: 0.9em;
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.card:hover .eye-icon {
  transform: scale(1.1);
}

h2 {
  margin: 0 0 12px 0;
  font-size: 1.5em;
  font-weight: 600;
  color: #f2f2f2;
  line-height: 1.3;
  transition: all 0.3s ease;
}

.card:hover h2 {
  color: #ffffff;
}

p {
  margin: 0 0 20px 0;
  color: #ccc;
  line-height: 1.5;
  font-size: 0.95em;
  transition: all 0.3s ease;
}

.card:hover p {
  color: #e0e0e0;
}

.read-more {
  color: #f28705;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(242, 135, 5, 0.05);
  border: 1px solid rgba(242, 135, 5, 0.1);
}

.read-more:hover {
  transform: translateX(3px);
  background: rgba(242, 135, 5, 0.1);
  border-color: rgba(242, 135, 5, 0.2);
}

.arrow {
  transition: transform 0.4s ease;
}

.read-more:hover .arrow {
  transform: translateX(2px);
}

.border-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(45deg, transparent, rgba(242, 135, 5, 0.15), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 1;
}

.card:hover .border-effect {
  opacity: 1;
}

/* Responsividade */
@media (max-width: 768px) {
  .card {
    padding: 20px;
  }

  h2 {
    font-size: 1.3em;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
