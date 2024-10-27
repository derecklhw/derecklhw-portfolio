<template>
  <div class="flex justify-center">
    <p class="flex gap-x-1 text-sm md:text-base">
      © 2024 - {{ currentYear }} ·
      <a
        class="underline font-semibold"
        href="https://github.com/derecklhw/"
        target="_blank"
      >
        Dereck Lam Hon Wah
      </a>
      · Mauritius 🇲🇺
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const currentYear = ref<number>(2024);

onMounted(async () => {
  currentYear.value = new Date().getFullYear();
});
</script>
