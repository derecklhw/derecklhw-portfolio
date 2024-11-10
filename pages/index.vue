<template>
  <div class="h-full">
    <div class="flex flex-col gap-y-4 my-4">
      <p class="text-2xl md:text-5xl uppercase tracking-wider font-semibold">
        Dereck Lam Hon Wah
      </p>

      <p class="text-lg md:text-2xl">
        Hi, I'm a full stack software engineer with 2 years of experience based
        in Mauritius and a tech savvy with a love for Linux (''>
      </p>
    </div>
    <div class="flex flex-col gap-y-4 my-12">
      <p class="text-2xl md:text-3xl font-medium">Recent Events</p>
      <div class="flex overflow-x-auto md:overflow-hidden gap-x-6 py-2">
        <EventCard
          v-for="eventInfo in eventInfoList"
          :key="eventInfo.title"
          :eventInfo="eventInfo"
        />
      </div>
      <p class="text-base md:text-lg">
        See More <NuxtLink class="underline" to="/events">Events</NuxtLink>
      </p>
    </div>
    <div class="flex flex-col gap-y-4 my-12">
      <p class="text-2xl md:text-3xl font-medium">Projects</p>
      <p class="text-lg md:text-xl">Coming soon... Looking for UI ideas</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { EventInfo } from "../types";

const eventInfoList = ref<EventInfo[]>([
  {
    date: "23 Oct 2024",
    title: "Skyrocket your gitworkflow",
    description: "Speaker",
    event_link: "google.com",
    slides_link: "google.com",
    name: "Frontend.mu Meetup",
    location: "Mauritius",
  },
  {
    date: "23 Oct 2024",
    title: "Lighting Talk - Git Diffing Algorithm",
    description: "",
    event_link: "google.com",
    slides_link: "google.com",
    name: "Developers Conference 2024",
    location: "Mauritius",
  },
  {
    date: "23 Oct 2024",
    title: "Winner - 4th Edition of DigiCup 2024",
    description: "Attendee",
    event_link: "google.com",
    slides_link: "google.com",
    name: "FINAM DigiCup 2024",
    location: "Mauritius",
  },
  {
    date: "23 Oct 2024",
    title: "Winner - 4th Edition of DigiCup 2024",
    description: "Attendee",
    event_link: "google.com",
    slides_link: "google.com",
    name: "FINAM DigiCup 2024",
    location: "Mauritius",
  },
]);
</script>
