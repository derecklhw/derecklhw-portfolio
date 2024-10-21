<template>
  <div>
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
