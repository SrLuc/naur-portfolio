<template>
  <div
    class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden text-center text-white"
  >
    <!-- Fundo estelar -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-[#262019] via-[#594d3e] to-[#f28705]"
    >
      <!-- Estrelas (camadas com animações) -->
      <div
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] top-[-50%] left-[-50%] opacity-70 animate-stars-slow"
      ></div>
      <div
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 bg-[length:2px_2px] top-[-50%] left-[-50%] animate-stars-medium"
      ></div>
      <div
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 bg-[length:3px_3px] top-[-50%] left-[-50%] animate-stars-fast"
      ></div>

      <!-- Montanhas -->
      <div
        class="absolute bottom-0 w-full h-[40%] bg-[#262019] clip-mountain"
      ></div>
      <div
        class="absolute bottom-0 w-full h-[30%] bg-[#594d3e] opacity-90 clip-mountain-2"
      ></div>
      <div
        class="absolute bottom-0 w-full h-[20%] bg-[#a6a6a6] opacity-70 clip-mountain-3"
      ></div>
    </div>

    <!-- Navbar -->
    <nav class="z-10">
      <ul class="flex justify-center gap-3 md:gap-10 text-lg mb-2">
        <li>
          <RouterLink to="/projects" class="hover:opacity-70"
            >Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:opacity-70">About me</RouterLink>
        </li>
        <li>
          <RouterLink to="/blogs" class="hover:opacity-70">Blogs</RouterLink>
        </li>

        <li>
          <button @click="openModal" class="hover:opacity-70">Contact</button>
        </li>
      </ul>
    </nav>

    <!-- Modal de boas-vindas -->
    <transition name="fade">
      <div
        v-if="showWelcomeModal"
        class="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        @click.self="closeWelcome"
      >
        <div
          class="bg-[#262019] text-white p-8 rounded-xl shadow-xl animate-float max-w-sm text-center m-5"
        >
          <h2 class="text-3xl font-bold mb-4">Welcome to my Portfolio</h2>
          <p class="mb-6 text-gray-300 leading-relaxed">
            Behind the projects, there’s a story.
            <br />
            Dive into my About Me section to discover the journey, passion, and
            vision that drive my work.
          </p>

          <!-- Botão About me -->
          <RouterLink
            to="/about"
            class="block bg-[#f28705] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d97404] transition mb-4"
            @click="closeWelcome"
          >
            Explore About Me
          </RouterLink>

          <!-- Botão Fechar -->
          <button
            @click="closeWelcome"
            class="px-4 py-2 rounded hover:bg-cyan-600 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </transition>

    <!-- Conteúdo principal -->
    <main class="z-10 flex flex-col items-center justify-center p-4">
      <h1 class="text-5xl md:text-6xl font-bold tracking-widest">@naur.io</h1>
      <p class="text-gray-300 text-lg md:text-xl mt-4">
        Check out my
        <a href="/projects" class="underline text-cyan-400 hover:opacity-80"
          >projects</a
        >
        and see how I bring ideas to life.
      </p>
      <p class="text-gray-300 text-lg md:text-xl">
        Visit my
        <a href="/blogs" class="underline text-cyan-400 hover:opacity-80"
          >blog</a
        >
        for thoughts on tech and volunteering, and also check out my
        <a
          target="_blank"
          href="https://vsco.co/rickelmeramos/gallery"
          class="underline text-cyan-400 hover:opacity-80"
          >gallery</a
        >
        to see more about my Worldpackers journey.
      </p>
    </main>

    <ContacModal v-model="isModalOpen" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContacModal from "../components/ContacModal.vue";

const isModalOpen = ref(false);
const showWelcomeModal = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeWelcome() {
  showWelcomeModal.value = false;
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  localStorage.setItem("welcomeDate", today);
}

onMounted(() => {
  const today = new Date().toISOString().split("T")[0];
  const savedDate = localStorage.getItem("welcomeDate");

  if (savedDate !== today) {
    showWelcomeModal.value = true;
  }
});
</script>

<style>
/* Estrelas se movendo sozinhas */
@keyframes moveStars {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(500px, 500px);
  }
}

.animate-stars-slow {
  animation: moveStars 150s linear infinite;
}

.animate-stars-medium {
  animation: moveStars 100s linear infinite;
}

.animate-stars-fast {
  animation: moveStars 60s linear infinite;
}

/* Montanhas */
.clip-mountain {
  clip-path: polygon(
    0 100%,
    15% 60%,
    35% 80%,
    55% 50%,
    75% 75%,
    100% 60%,
    100% 100%
  );
}

.clip-mountain-2 {
  clip-path: polygon(
    0 100%,
    20% 70%,
    40% 90%,
    65% 60%,
    85% 85%,
    100% 70%,
    100% 100%
  );
}

.clip-mountain-3 {
  clip-path: polygon(
    0 100%,
    10% 80%,
    30% 95%,
    50% 70%,
    70% 90%,
    90% 75%,
    100% 85%,
    100% 100%
  );
}

/* Animação fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Efeito de flutuação */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
