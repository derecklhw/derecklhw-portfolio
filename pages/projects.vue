<template>
  <!-- <div class="w-full m-auto"> -->
  <div class="w-full lg:w-11/12 2xl:w-7/12 m-auto flex flex-col space-y-8">
    <div class="flex flex-col gap-y-2">
      <h2 class="text-4xl font-bold">My Projects</h2>
      <p class="text-lg">
        Discover the projects that I am currently contributing to or created.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
      <ProjectCard
        v-for="project in store.projects"
        :projectDetails="project"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SocialMediaItem } from "~/types";

const store = useProjectsStore();

onMounted(() => {
  store.fetchProjects();
});

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
