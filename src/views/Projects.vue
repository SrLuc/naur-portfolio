<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Container principal com gradiente animado -->
    <div
      class="min-h-screen bg-gradient-to-b from-[var(--color-medium)] via-[var(--color-light)] to-[var(--color-primary)] text-[var(--color-dark)] p-6 pt-24 relative z-0"
    >
      <!-- Container das ondas animadas -->
      <div class="absolute bottom-0 left-0 right-0 h-1/2 -z-10 overflow-hidden">
        <!-- Primeira camada de ondas (mais lenta) -->
        <div class="wave-container wave-animation-slow">
          <svg
            class="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--color-medium)"
              fill-opacity="0.3"
              d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,256C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        <!-- Segunda camada de ondas (velocidade média) -->
        <div class="wave-container wave-animation-medium">
          <svg
            class="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--color-dark)"
              fill-opacity="0.7"
              d="M0,288L80,277.3C160,267,320,245,480,218.7C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        <!-- Terceira camada de ondas (mais rápida) -->
        <div class="wave-container wave-animation-fast">
          <svg
            class="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--color-primary)"
              fill-opacity="0.2"
              d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Navbar -->
      <Navbar />

      <!-- Conteúdo -->
      <div class="relative z-10">
        <hr class="border-t-2 border-white/10 mb-10" />
        <h1
          class="text-4xl font-bold mb-10 text-left text-white drop-shadow-md"
        >
          Recent Projects
        </h1>

        <div
          class="grid gap-6"
          style="
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: minmax(200px, auto);
          "
        >
          <RouterLink
            v-for="project in projects"
            :key="project.slug"
            :to="`/projects/${project.slugClean}`"
          >
            <Card
              :id="project.slug"
              :title="project.title"
              :description="project.description"
              :date="project.date"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import projects from "../utils/projects.js";
import Navbar from "../components/Navbar.vue";
</script>

<style scoped>
/* Reset do gradiente animado no background principal */
.min-h-screen {
  background: linear-gradient(
    to bottom,
    var(--color-medium),
    var(--color-light),
    var(--color-primary)
  );
}

/* Padding-top maior para compensar navbar fixa */
.pt-24 {
  padding-top: 6rem; /* 96px */
}

/* Container para as ondas */
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 200%;
  margin-left: -50%;
}

/* Animações das ondas */
.wave-animation-slow {
  animation: waveMoveSlow 20s ease-in-out infinite;
  z-index: 1;
}

.wave-animation-medium {
  animation: waveMoveMedium 15s ease-in-out infinite;
  z-index: 2;
  animation-delay: -5s;
}

.wave-animation-fast {
  animation: waveMoveFast 10s ease-in-out infinite;
  z-index: 3;
  animation-delay: -2s;
}

/* Keyframes das ondas */
@keyframes waveMoveSlow {
  0%, 100% { transform: translateX(0) scaleX(1); }
  25% { transform: translateX(-2%) scaleX(1.02); }
  50% { transform: translateX(1%) scaleX(0.98); }
  75% { transform: translateX(3%) scaleX(1.01); }
}

@keyframes waveMoveMedium {
  0%, 100% { transform: translateX(0) scaleX(1) translateY(0); }
  25% { transform: translateX(-3%) scaleX(1.03) translateY(-1%); }
  50% { transform: translateX(2%) scaleX(0.97) translateY(0.5%); }
  75% { transform: translateX(4%) scaleX(1.02) translateY(-0.5%); }
}

@keyframes waveMoveFast {
  0%, 100% { transform: translateX(0) scaleX(1) scaleY(1); }
  25% { transform: translateX(-5%) scaleX(1.05) scaleY(1.02); }
  50% { transform: translateX(3%) scaleX(0.95) scaleY(0.98); }
  75% { transform: translateX(6%) scaleX(1.03) scaleY(1.01); }
}

/* Efeito de profundidade e blur */
.wave-container svg { transition: all 0.3s ease; }
.wave-container { will-change: transform; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.wave-animation-slow svg { filter: blur(0.5px); }
.wave-animation-medium svg { filter: blur(0.3px); }
.wave-animation-fast svg { filter: blur(0.1px); }

/* Gradiente sutil no fundo */
.min-h-screen::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%);
  z-index: 0;
  animation: subtleShift 30s ease-in-out infinite;
}

@keyframes subtleShift {
  0%,100% { opacity: 0.3; background-position: 0% 0%; }
  50% { opacity: 0.5; background-position: 100% 100%; }
}

/* Responsividade das ondas */
@media (max-width: 768px) {
  .wave-animation-slow { animation-duration: 25s; }
  .wave-animation-medium { animation-duration: 18s; }
  .wave-animation-fast { animation-duration: 12s; }
}
</style>
