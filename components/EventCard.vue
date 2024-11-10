<template>
  <div class="flip-card h-56 bg-transparent min-w-80 md:min-w-96">
    <div class="flip-card-inner h-full relative">
      <div class="flip-card-front border-white dark:border-slate-950">
        <div
          class="w-full h-full bg-cover relative"
          style="background-image: url('/test.jpeg')"
        >
          <IconsAutorenewRounded
            class="md:hidden absolute top-2 right-1 size-8 hover:cursor-pointer text-white"
          />
        </div>
      </div>
      <div
        class="flip-card-back flex-col gap-y-2 p-4 bg-white dark:bg-slate-950 border-white dark:border-slate-950"
      >
        <div class="flex flex-col h-full">
          <div class="flex-none">
            <p class="text-sm md:text-base">{{ eventInfo.date }}</p>
            <p class="text-xl md:text-2xl font-medium py-1">
              {{ eventInfo.title }}
            </p>
          </div>
          <div class="flex-1">
            <p class="text-base md:text-lg">{{ eventInfo.description }}</p>
          </div>
          <div class="flex-none">
            <div
              class="flex justify-start text-sm md:text-base gap-x-3 underline font-light mb-1"
            >
              <a :href="eventInfo.event_link">Event link</a>
              <a :href="eventInfo.slides_link">Slides</a>
              <a :href="eventInfo.event_link">Blog</a>
            </div>
          </div>
          <div class="flex-none">
            <div class="flex justify-between font-medium text-sm md:text-base">
              <p>{{ eventInfo.name }}</p>
              <p>{{ eventInfo.location }}</p>
            </div>
          </div>
        </div>
      </div>
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
<style scoped>
.flip-card {
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border: 2px solid;
  border-radius: 0.375rem;
  display: flex;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
