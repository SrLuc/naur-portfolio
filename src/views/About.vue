<template>
  <div>
    <!-- Hero Section -->
    <div
      class="relative flex flex-col items-center justify-center w-full h-screen text-white text-center overflow-hidden shadow-2xl"
    >
      <img
        :src="isMobile ? mobileImage : backgroundImage"
        alt="Background"
        class="absolute inset-0 w-full h-full -z-10 shadow-2xl object-cover"
      />

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
    </div>

    <!-- About Me Section com animação -->
    <transition name="fade-slide">
      <section v-if="showAbout" class="w-full px-5 bg-[#262019] text-white">
        <div
          class="max-w-6xl mx-auto py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <!-- Coluna esquerda -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-4xl font-bold">Who I am ?</h2>
            <p class="text-xl md:text-xl">
              My name is
              <span class="text-amber-400 font-semibold"
                >Ruan Rickelme Ramos</span
              >, a software engineer with a deep appreciation for continuous
              learning and
              <span class="text-amber-400 font-semibold">human connection</span
              >. Beyond technology, I’m passionate about experiences that bring
              people together, from
              <span class="text-amber-400 font-semibold"
                >cultural exchanges</span
              >
              to <span class="text-amber-400 font-semibold">permaculture</span>,
              <span class="text-amber-400 font-semibold">gardening</span>, and
              initiatives with a positive ecological impact.
            </p>
          </div>

          <!-- Coluna direita -->
          <div class="space-y-6 text-left md:text-right">
            <h2 class="text-4xl md:text-4xl font-bold text-right">What I do</h2>
            <p class="text-xl md:text-xl text-right">
              With
              <span class="text-amber-400 font-semibold"
                >5 years of experience,</span
              >
              I’ve built digital products from management systems to creative
              web apps. I’ve worked at Motorola and Porto Digital, gaining
              strong expertise inSoftware Engineering and quality. I also hold a
              postgraduate degree in
              <span class="text-amber-400 font-semibold"
                >Software Engineering focused on Software Quality</span
              >
              . You can check my
              <a
                href="https://example.com/your-cv.pdf"
                target="_blank"
                class="text-amber-400 font-semibold underline underline-offset-2 hover:text-amber-200 transition-colors"
              >
                resume
              </a>
              for more details.
            </p>
          </div>

          <!-- Coluna esquerda -->
          <div class="space-y-6">
            <h2 class="text-4xl md:text-4xl font-bold">Freelancer</h2>
            <p class="text-xl md:text-xl">
              I’m open to freelance opportunities that align with my skills and
              values. If you have a project that could benefit from my expertise
              in software development, or if you share my passion for
              sustainability and community impact, let’s connect and see my
              <a
                href="https://www.upwork.com/freelancers/~01fe23500ab0d726b9"
                target="_blank"
                class="text-amber-400 font-semibold underline underline-offset-2 hover:text-amber-200 transition-colors"
                >Upwork profile</a
              >
              and explore how we can work together.
            </p>
          </div>

          <!-- Coluna direita -->
          <div class="space-y-6 text-left md:text-right">
            <h2 class="text-4xl md:text-4xl font-bold text-right">My Dreams</h2>
            <p class="text-xl md:text-xl text-right">
              My dream is to keep solving real-world problems through technology
              while exploring the world. I aspire to merge my career with my
              passion for ecological awareness, contributing to projects that
              generate positive impact — whether through sustainable practices,
              community work, or technology that makes people’s lives better.
              You can check my
              <a
                href="https://www.worldpackers.com/profile/your-profile-id"
                target="_blank"
                class="text-amber-400 font-semibold underline underline-offset-2 hover:text-amber-200 transition-colors"
              >
                Worldpackers profile
              </a>
              to see more about my experiences.
            </p>
          </div>
        </div>
      </section>
    </transition>

    <!-- Services Section -->
    <section class="w-full py-10 px-5 text-center bg-">
      <div class="text-center my-6">
        <RouterLink
          to="/services"
          class="inline-block px-6 py-3 rounded-lg bg-amber-500/100 backdrop-blur-md text-white font-bold text-xl shadow-lg hover:bg-amber-500/100 hover:scale-105 transition-all duration-300"
        >
          Click here to see all Services Designed to Help Your Business Grow
        </RouterLink>
      </div>

      <!-- Volunteer Gallery Section -->
      <section class="max-w-7xl mx-auto p-5">
        <h2 class="text-5xl font-bold text-center mb-10 text-amber-500">
          My Recent Volunteer Projects and Travels
        </h2>

        <div class="volunteer-masonry">
          <div
            v-for="(photo, index) in volunteerPhotos"
            :key="index"
            class="relative group overflow-hidden rounded-sm shadow-lg cursor-pointer"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl"
            >
              <p class="text-white font-semibold text-center px-2">
                {{ photo.title }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import backgroundImage from "../assets/imgs/meImgs/yo4.jpg";
//import profilePicture from "../assets/imgs/me.png";
import Navbar from "../components/Navbar.vue";
import ServiceCard from "../components/ServiceCard.vue";

import { reactive } from "vue";
import volunteerPhotos from "../utils/volunteerPhotos.ts";

// Armazenar proporções reais das imagens
const photoSizes = reactive(
  volunteerPhotos.map(() => ({ width: 1, height: 1 }))
);

// Atualiza as proporções quando a imagem carrega
function setPhotoSize(index, event) {
  const img = event.target;
  photoSizes[index].width = img.naturalWidth;
  photoSizes[index].height = img.naturalHeight;
  volunteerPhotos[index].width = img.naturalWidth;
  volunteerPhotos[index].height = img.naturalHeight;
}

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
.volunteer-masonry {
  column-count: 4;
  column-gap: 1rem;
}

.volunteer-masonry {
  column-count: 4;
  column-gap: 1rem;
}

.volunteer-masonry > div {
  break-inside: avoid;
  margin-bottom: 1rem;
}

@media (max-width: 1024px) {
  .volunteer-masonry {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .volunteer-masonry {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .volunteer-masonry {
    column-count: 1;
  }
}
</style>
