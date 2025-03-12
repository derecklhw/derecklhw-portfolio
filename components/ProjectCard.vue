<template>
  <div
    class="w-full bg-white dark:bg-black rounded-lg border border-zinc-300 dark:border-zinc-700 p-4"
  >
    <img
      src="https://idobe.engineering.ualberta.ca/wp-content/plugins/elementor/assets/images/placeholder.png"
      alt="Project Image"
      class="object-cover"
    />
    <div class="flex flex-col mt-3 gap-y-3">
      <h4 class="font-semibold text-lg">
        {{ projectDetails.name }}
      </h4>
      <p class="text-sm min-h-12">
        {{ projectDetails.description }}
      </p>
      <div class="flex flex-wrap gap-x-4 mx-2">
        <p class="text-sm font-semibold">{{ projectDetails.language }}</p>
        <p class="text-sm font-semibold">{{ projectDetails.language }}</p>
      </div>
      <div class="flex flex-wrap gap-x-3">
        <NuxtLink
          class="flex border rounded-lg px-2 py-1 bg-white text-black hover:bg-black hover:text-white"
          :to="projectDetails.url"
          target="_blank"
        >
          <Icon name="uil:github" size="16" class="mr-1" />
          <p class="text-sm font-semibold">Github</p>
        </NuxtLink>
        <NuxtLink
          class="flex border rounded-lg px-2 py-1 bg-white text-black hover:bg-black hover:text-white"
          :to="projectDetails.url"
          target="_blank"
        >
          <Icon name="uil:globe" size="16" class="mr-1" />
          <p class="text-sm font-semibold">Website</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ProjectItem } from "~/types";
interface Props {
  projectDetails: ProjectItem;
}
defineProps<Props>();
</script>

<!-- https://api.github.com/repos/derecklhw/la_vanille_wild_lens/languages -->
