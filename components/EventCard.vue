<template>
  <div class="flex flex-col gap-y-2 border-2 rounded-lg p-4 h-64">
    <p class="text-sm md:text-base">{{ eventInfo.date }}</p>
    <p class="text-lg md:text-2xl font-medium">
      {{ eventInfo.title }}
    </p>
    <p class="text-base md:text-lg">{{ eventInfo.description }}</p>
    <div class="flex flex-col gap-y-2 h-2/4 text-sm md:text-base">
      <a :href="eventInfo.event_link" class="underline">Event Link</a>
      <a :href="eventInfo.slides_link" class="underline">Slides Link</a>
    </div>
    <div class="flex justify-between font-medium text-base md:text-lg">
      <p>{{ eventInfo.name }}</p>
      <p>{{ eventInfo.location }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { EventInfo } from "../types";

defineProps({
  eventInfo: {
    type: Object as PropType<EventInfo>,
    required: true,
  },
});
</script>
