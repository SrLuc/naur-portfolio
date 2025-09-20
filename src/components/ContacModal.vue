<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
  >
    <div
      class="bg-white/10 backdrop-blur-md text-white rounded-lg shadow-xl w-11/12 max-w-md p-6 relative"
    >
      <!-- Botão de fechar -->
      <button
        @click="$emit('update:modelValue', false)"
        class="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
      >
        ✖
      </button>

      <h2 class="text-2xl font-bold mb-6 text-center">Get in Touch</h2>

      <ul class="space-y-4">
        <!-- Email -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-black/60"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/email.png"
            alt="Email"
            class="w-8 h-8"
          />
          <a
            href="mailto:ruanlucenaramos@gmail.com"
            class="text-blue-400 hover:underline flex-1"
            >ruanlucenaramos@gmail.com</a
          >
        </li>

        <!-- WhatsApp -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] hover:bg-black/60"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
            alt="WhatsApp"
            class="w-8 h-8"
          />
          <a
            href="https://wa.me/558199302999713"
            target="_blank"
            class="text-green-400 hover:underline flex-1"
            >WhatsApp</a
          >
        </li>

        <!-- LinkedIn -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] hover:bg-black/60"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/0A66C2/linkedin.png"
            alt="LinkedIn"
            class="w-8 h-8"
          />
          <a
            href="linkedin.com/in/ruan-lucena-ramos-387623232/"
            target="_blank"
            class="text-blue-400 hover:underline flex-1"
            >LinkedIn</a
          >
        </li>

        <!-- Upwork -->
        <li
          class="flex items-center gap-4 p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,81,224,0.5)] hover:bg-black/60"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/9945FF/upwork.png"
            alt="Upwork"
            class="w-8 h-8"
          />
          <a
            href="https://www.upwork.com/freelancers/~yourid"
            target="_blank"
            class="text-purple-400 hover:underline flex-1"
            >Upwork</a
          >
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
