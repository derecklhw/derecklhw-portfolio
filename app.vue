<template>
  <div>
    <p class="underline text-red-700 dark:text-blue-600">This is tailwind</p>
    <div
      @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    >
      Toggle Dark Mode
    </div>
  </div>
</template>
<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
