<template>
  <div>
    <div
      class="hover:cursor-pointer"
      @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    >
      <!-- TODO: bug in darkmode with icon -->
      <IconsSunSolid v-if="$colorMode.value == 'dark'" :class="sizeClass" />
      <IconsMoonSolid v-else :class="sizeClass" />
    </div>
  </div>
</template>
<script setup lang="ts">
type Theme = "light" | "dark";
defineProps<{
  sizeClass?: string;
}>();

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
