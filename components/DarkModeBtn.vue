<template>
  <button
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <ClientOnly>
      <Icon
        :name="isDark ? 'heroicons-solid:sun' : 'heroicons-solid:moon'"
        class="size-6"
      />
    </ClientOnly>
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
