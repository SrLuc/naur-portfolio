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
        class="text-3xl font-bold mb-6 text-center tracking-wider drop-shadow-lg text-[#f2f2f2]"
      >
        🚀 Let’s Connect
      </h2>

      <ul class="space-y-4">
        <!-- Email -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-[#262019]/60 border border-[#a6a6a6]/20 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,135,5,0.5)] hover:scale-[1.02]"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#f28705]/20"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/f2f2f2/email.png"
              alt="Email"
            />
          </div>
          <a
            href="mailto:ruanlucenaramos@gmail.com"
            class="text-[#f2f2f2] hover:text-[#f28705] transition-colors flex-1"
          >
            ruanlucenaramos@gmail.com
          </a>
        </li>

        <!-- LinkedIn -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-[#262019]/60 border border-[#a6a6a6]/20 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(10,102,194,0.5)] hover:scale-[1.02]"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2]/20"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/0A66C2/linkedin.png"
              alt="LinkedIn"
            />
          </div>
          <a
            href="https://linkedin.com/in/ruan-lucena-ramos-387623232/"
            target="_blank"
            class="text-[#0A66C2] hover:underline flex-1"
          >
            LinkedIn
          </a>
        </li>

        <!-- Upwork -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-[#262019]/60 border border-[#a6a6a6]/20 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(155,81,224,0.5)] hover:scale-[1.02]"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#9945FF]/20"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/9945FF/upwork.png"
              alt="Upwork"
            />
          </div>
          <a
            href="https://www.upwork.com/freelancers/~01fe23500ab0d726b9"
            target="_blank"
            class="text-[#9945FF] hover:underline flex-1"
          >
            Upwork
          </a>
        </li>

        <!-- Instagram -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-[#262019]/60 border border-[#a6a6a6]/20 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(228,64,95,0.6)] hover:scale-[1.02]"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#E4405F]/20"
          >
            <img
              src="https://img.icons8.com/ios-filled/30/E4405F/instagram-new.png"
              alt="Instagram"
            />
          </div>
          <a
            href="https://instagram.com/por.naur"
            target="_blank"
            class="text-[#E4405F] hover:underline flex-1"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
});

defineEmits(["update:modelValue"]);
</script>
