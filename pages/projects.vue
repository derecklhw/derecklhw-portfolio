<template>
  <div class="w-full m-auto">
    <div class="flex flex-col items-center gap-y-4">
      <h2 class="text-5xl font-bold">Projects</h2>
      <p>Projects that I created or maintaining.</p>
      <div class="flex gap-x-5">
        <NuxtLink v-for="item in projectHosts" :to="item.url" target="_blank">
          <Icon :name="item.icon" size="3em" />
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SocialMediaItem } from "~/types";

const projectHosts: SocialMediaItem[] = [
  {
    name: "Github",
    icon: "uil:github",
    url: `https://github.com/derecklhw`,
  },
  // {
  //   name: "Gitlab",
  //   icon: "uil:gitlab",
  //   url: `https://gitlab.com/derecklhw`,
  // },
];
</script>
