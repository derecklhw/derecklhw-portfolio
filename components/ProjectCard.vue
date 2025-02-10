<template>
  <div
    class="w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700"
    style="height: 28rem"
  >
    <img
      :src="projectDetails.image"
      alt="Project Image"
      class="w-full h-80 object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ projectDetails.name }}</h3>
      <p>{{ projectDetails.description }}</p>
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
