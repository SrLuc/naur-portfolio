<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
  >
    <div
      class="relative bg-gradient-to-b from-[#262019]/95 via-[#594d3e]/80 to-[#f28705]/60 text-white rounded-xl shadow-2xl w-11/12 max-w-md p-6"
    >
      <!-- Botão de fechar -->
      <button
        @click="$emit('update:modelValue', false)"
        class="absolute top-3 right-3 text-gray-300 hover:text-[#f28705] text-xl transition-colors"
      >
        ✖
      </button>

      <h2
        class="text-xl font-bold mb-6 text-center tracking-wider drop-shadow-lg text-[#f2f2f2]"
      >
        Let’s Connect
      </h2>

      <ul class="grid grid-cols-2 gap-4">
        <!-- Reusable Card -->
        <ContactCard
          icon="https://img.icons8.com/ios-filled/50/f2f2f2/email.png"
          label="ruanlucenaramos"
          href="mailto:ruanlucenaramos@gmail.com"
          bgColor="bg-[#262019]/60"
          hoverColor="rgba(242,135,5,0.5)"
        />

        <ContactCard
          icon="https://img.icons8.com/ios-filled/50/0A66C2/linkedin.png"
          label="LinkedIn"
          href="https://linkedin.com/in/ruan-lucena-ramos-387623232/"
          bgColor="bg-[#262019]/60"
          textColor="#0A66C2"
          hoverColor="rgba(10,102,194,0.5)"
          target="_blank"
        />

        <ContactCard
          icon="https://img.icons8.com/ios-filled/50/9945FF/upwork.png"
          label="Upwork"
          href="https://www.upwork.com/freelancers/~01fe23500ab0d726b9"
          bgColor="bg-[#262019]/60"
          textColor="#9945FF"
          hoverColor="rgba(155,81,224,0.5)"
          target="_blank"
        />

        <ContactCard
          icon="https://img.icons8.com/ios-filled/50/E4405F/instagram-new.png"
          label="Instagram"
          href="https://instagram.com/por.naur"
          bgColor="bg-[#262019]/60"
          textColor="#E4405F"
          hoverColor="rgba(228,64,95,0.6)"
          target="_blank"
        />

        <ContactCard
          icon="https://images.icon-icons.com/2622/PNG/512/brand_vsco_icon_158631.png"
          label="VSCO"
          href="https://vsco.co/rickelmeramos/gallery"
          bgColor="bg-[#262019]/60"
          textColor="#f2f2f2"
          hoverColor="rgba(242,135,5,0.5)"
          target="_blank"
        />
        <ContactCard
          icon="https://cdn-icons-png.flaticon.com/512/145/145809.png"
          label="SoundCloud"
          href="https://soundcloud.com/ruan-lucena-828574018"
          bgColor="bg-[#262019]/60"
          textColor="#f2f2f2"
          hoverColor="rgba(242,135,5,0.5)"
          target="_blank"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import ContactCard from "../components/ContactCard.vue";

defineProps({
  modelValue: Boolean,
});

defineEmits(["update:modelValue"]);
</script>
