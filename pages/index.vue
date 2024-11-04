<template>
  <div class="h-full">
    <div class="flex flex-col gap-y-4 my-4">
      <p class="text-2xl md:text-5xl uppercase tracking-wider font-semibold">
        Dereck Lam Hon Wah
      </p>

      <p class="text-lg md:text-2xl">
        Hi, I'm a full stack software engineer with 2 years of experience based
        in Mauritius. A tech savvy with a love for Linux (''>
      </p>
    </div>
    <div class="flex flex-col gap-y-4 my-12">
      <p class="text-2xl md:text-4xl font-medium">Events</p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0"
      >
        <EventCard
          v-for="eventInfo in eventInfoList"
          :key="eventInfo.title"
          :eventInfo="eventInfo"
        />
      </div>
      <!-- <div class="flex flex-col gap-y-4 my-12">
        <p class="text-2xl md:text-4xl font-medium">Projects</p>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import type { EventInfo } from "../types";

const eventInfoList = ref<EventInfo[]>([
  {
    date: "23 Oct 2024",
    title: "Skyrocket your gitworkflow",
    description: "Speaker at this meetup",
    event_link: "google.com",
    slides_link: "google.com",
    name: "Frontend.mu Meetup",
    location: "Mauritius",
  },
  {
    date: "23 Oct 2024",
    title: "Lighting Talk - Git Diffing Algorithm",
    description: "Speaker at this meetup",
    event_link: "google.com",
    slides_link: "google.com",
    name: "Developers Conference 2024",
    location: "Mauritius",
  },
  {
    date: "23 Oct 2024",
    title: "Lighting Talk - Git Diffing Algorithm",
    description: "Speaker at this meetup",
    event_link: "google.com",
    slides_link: "google.com",
    name: "Developers Conference 2024",
    location: "Mauritius",
  },
]);
</script>
