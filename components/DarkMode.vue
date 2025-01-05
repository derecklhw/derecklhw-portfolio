<template>
  <button
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <!-- TODO: fix bug in dark mode with icon, should be sun icon but is moon icon -->
    <Icon name="heroicons-solid:sun" v-if="isDark" class="size-6" />
    <Icon name="heroicons-solid:moon" v-else class="size-6" />
  </button>
</template>
<script setup lang="ts">
import { computed } from "vue";
type Theme = "light" | "dark";

const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme;
};
</script>
