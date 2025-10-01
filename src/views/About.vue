<template>
  <div
    class="relative flex flex-col items-center justify-center w-full h-screen text-white text-center overflow-hidden shadow-2xl"
  >
    <!-- Background (imported image) -->
    <div
      class="absolute inset-0 bg-cover bg-center -z-10 shadow-2xl"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Navbar (fixed top-left) -->
    <div class="absolute top-5 left-5 z-20">
      <Navbar />
    </div>

    <!-- Conteúdo central -->
    <div class="z-10 flex flex-col items-center mb-40">
      <h1 class="text-4xl md:text-5xl font-bold mb-3 shadow-2xs">
        Ruan Rickelme Ramos
      </h1>
      <p class="text-lg md:text-xl max-w-xl shadow-2xl">
        Turning ideas into solutions while exploring the world.
      </p>
      <p class="text-md md:text-lg mt-2 max-w-xl shadow-2xl">
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

  <!-- Services Section -->
  <section class="w-full py-10 px-5 text-center">
    <div class="bg-[#594d3e] py-10 px-5 rounded-lg max-w-5xl mx-auto mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-white">
        Services Designed to Help Your Business Grow
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
    >
      <ServiceCard
        title="Hostel Management Systems"
        description="Custom systems to manage rooms, reservations, and guests with ease. Save time and keep your hostel running smoothly."
        image="@/assets/imgs/hostel-system.png"
        color="bg-[#a9733d]"
      />

      <ServiceCard
        title="Web Development"
        description="Responsive websites tailored to your business needs."
        image="@/assets/imgs/web-dev.png"
        color="bg-[#f28705]"
      />

      <ServiceCard
        title="UI/UX Design"
        description="Engaging interfaces for seamless user experience."
        image="@/assets/imgs/ui-ux.png"
        color="bg-[#594d3e]"
      />

      <ServiceCard
        title="Consulting"
        description="Expert guidance to make your projects succeed efficiently."
        image="@/assets/imgs/consulting.png"
        color="bg-[#262019]"
      />
    </div>
  </section>
</template>

<script setup>
import backgroundImage from "../assets/imgs/background.jpg";
import profilePicture from "../assets/imgs/me.png";
import Navbar from "../components/Navbar.vue";
import ServiceCard from "../components/ServiceCard.vue";
</script>
