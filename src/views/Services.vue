<template>
  <div class="min-h-screen bg-[#262019] text-white py-12 px-5">
    <!-- Navbar -->
    <div class="max-w-7xl mx-auto mb-12">
      <Navbar />
    </div>

    <!-- Título da página -->
    <div class="text-center mb-10">
      <h1 class="text-5xl font-bold text-amber-500">
        Services Designed to Help Your Business Grow
      </h1>
      <p class="text-xl md:text-2xl mt-4 text-zinc-300 max-w-3xl mx-auto">
        Explore the range of services I offer to help your business or project
        succeed. Each service is tailored to provide maximum impact and
        efficiency.
      </p>
    </div>

    <!-- Cards de Serviços -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
    >
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :color="service.color"
      />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ServiceCard from "../components/ServiceCard.vue";

// Aqui você coloca os serviços que deseja mostrar
const services = [
  {
    title: "Hostel Management Systems",
    description:
      "Custom systems to manage rooms, reservations, and guests with ease. Save time and keep your hostel running smoothly.",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/hostel-room-illustration-svg-download-png-11756742.png",
    color: "bg-[#a9733d]",
  },
  {
    title: "Web Applications",
    description:
      "Responsive and interactive web apps to meet business needs. From dashboards to marketing tools, everything is optimized.",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/web-development-technology-3828027-3178333.png",
    color: "bg-[#1f2937]",
  },
  {
    title: "Mobile Applications",
    description:
      "iOS and Android apps built with modern frameworks, ensuring high performance and smooth UX for your users.",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-1893102-1598519.png",
    color: "bg-[#059669]",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Improve your online presence, increase traffic and generate leads with tailored SEO strategies.",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-analytics-3828081-3178390.png",
    color: "bg-[#7c3aed]",
  },
  // Adicione mais serviços conforme precisar
];
</script>

<style scoped>
/* Pequenos ajustes visuais */
</style>
