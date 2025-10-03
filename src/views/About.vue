<template>
  <div>
    <!-- Hero Section -->
    <div
      class="relative flex flex-col items-center justify-center w-full h-screen text-white text-center overflow-hidden shadow-2xl"
    >
      <div
        class="absolute inset-0 bg-cover bg-center -z-10 shadow-2xl"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>

      <!-- Navbar -->
      <div class="absolute top-5 left-5 z-20">
        <Navbar />
      </div>

      <!-- Conteúdo central -->
      <div class="z-10 flex flex-col items-center mb-40 p-2.5">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">Ruan Rickelme Ramos</h1>
        <p class="text-xl sm:text-2xl md:text-3xl">
          Turning ideas into solutions while exploring the world.
        </p>
        <p class="text-xl sm:text-2xl md:text-3xl mt-2">
          5 years building solutions while exploring the world.
        </p>
      </div>

      <!-- Foto maior, na parte de baixo -->
      <img
        :src="profilePicture"
        alt="Rickelme Ramos"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[420px] object-contain z-10"
      />
    </div>

    <!-- About Me Section com animação -->
    <transition name="fade-slide">
      <section v-if="showAbout" class="w-full px-5 bg-[#262019] text-white">
        <div
          class="max-w-6xl mx-auto py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <!-- Coluna esquerda -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-4xl font-bold">Who i am ?</h2>
            <p class="text-xl md:text-xl">
              My name is Ruan Rickelme Ramos, a software engineer with a deep
              appreciation for continuous learning and human connection. Beyond
              technology, I’m passionate about experiences that bring people
              together, from cultural exchanges to permaculture, gardening, and
              initiatives with a positive ecological impact.
            </p>
          </div>

          <!-- Coluna direita -->
          <div class="space-y-6 text-left md:text-right">
            <h2 class="text-4xl md:text-4xl font-bold text-right">What I do</h2>
            <p class="text-xl md:text-xl text-right">
              With 5 years of experience, I’ve built digital products from
              management systems to creative web apps. I’ve worked at Motorola
              and Porto Digital, gaining strong expertise in software
              engineering and quality. I also hold a postgraduate degree in
              Software Engineering focused on Software Quality.
            </p>
          </div>

          <!-- Coluna esquerda -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-4xl font-bold">My Dreams</h2>
            <p class="text-xl md:text-xl">
              My dream is to keep solving real-world problems through technology
              while exploring the world. I aspire to merge my career with my
              passion for ecological awareness, contributing to projects that
              generate positive impact — whether through sustainable practices,
              community work, or technology that makes people’s lives better.
            </p>
          </div>
        </div>
      </section>
    </transition>

    <!-- Services Section -->
    <section class="w-full py-10 px-5 text-center">
      <div class="py-10 px-5 rounded-xl max-w-5xl mx-auto mb-8 shadow-2xl">
        <h2 class="text-2xl md:text-3xl font-bold text-[#594d3e]">
          Services Designed to Help Your Business Grow
        </h2>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        <ServiceCard
          title="Hostel Management Systems"
          description="Custom systems to manage rooms, reservations, and guests with ease. Save time and keep your hostel running smoothly."
          image="https://cdni.iconscout.com/illustration/premium/thumb/hostel-room-illustration-svg-download-png-11756742.png"
          color="bg-[#a9733d]"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import backgroundImage from "../assets/imgs/background2.jpg";
//import profilePicture from "../assets/imgs/me.png";
import Navbar from "../components/Navbar.vue";
import ServiceCard from "../components/ServiceCard.vue";

// Controla a animação da seção About Me
const showAbout = ref(false);

onMounted(() => {
  // Delay para animação suave
  setTimeout(() => {
    showAbout.value = true;
  }, 300);
});
</script>

<style>
/* Animação fade + slide para About Me */
.fade-slide-enter-active {
  transition: all 0.8s ease;
}
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
