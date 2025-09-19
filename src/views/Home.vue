<template>
  <div
      class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden text-center text-white bg-black"
      @mousemove="handleMouseMove"
  >
    <!-- Navbar acima do nome -->
    <nav class="z-10">
      <ul class="flex justify-center gap-10 text-lg">
        <li>
          <RouterLink to="/projects" class="no-underline hover:opacity-70">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/blogs" class="no-underline hover:opacity-70">Blogs</RouterLink>
        </li>
        <li>
          <RouterLink to="/gallery" class="no-underline hover:opacity-70">Gallery</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="no-underline hover:opacity-70">Contact</RouterLink>
        </li>
      </ul>
    </nav>


    <!-- Conteúdo principal -->
    <main class="z-10 flex flex-col items-center justify-center">
      <h1 class="text-5xl md:text-6xl font-bold tracking-widest m-0">@naur.io</h1>

      <p class="text-gray-300 text-lg md:text-xl mt-4 mb-0">
        Check out my <a href="#projects" class="underline text-cyan-400 hover:opacity-80">projects</a> and see how I
        bring ideas to life.
      </p>
      <p class="text-gray-300 text-lg md:text-xl mt-2 mb-0">
        Visit my <a href="#blogs" class="underline text-cyan-400 hover:opacity-80">blog</a> to explore thoughts on
        technology and innovation.
      </p>
    </main>

    <!-- Fundo de estrelas -->
    <div
        ref="stars"
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] top-[-50%] left-[-50%] animate-[moveStars_60s_linear_infinite]"
    ></div>
    <div
        ref="stars2"
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 bg-[length:2px_2px] top-[-50%] left-[-50%] animate-[moveStars_120s_linear_infinite]"
    ></div>
    <div
        ref="stars3"
        class="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 bg-[length:3px_3px] top-[-50%] left-[-50%] animate-[moveStars_180s_linear_infinite]"
    ></div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const stars = ref(null);
const stars2 = ref(null);
const stars3 = ref(null);

function handleMouseMove(e) {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  stars.value.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
  stars2.value.style.transform = `translate(${mouseX * 60}px, ${mouseY * 60}px)`;
  stars3.value.style.transform = `translate(${mouseX * 90}px, ${mouseY * 90}px)`;
}
</script>

<style>
@keyframes moveStars {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(1000px, 1000px);
  }
}
</style>
