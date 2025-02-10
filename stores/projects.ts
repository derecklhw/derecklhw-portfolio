import { defineStore } from "pinia";
import type { ProjectItem } from "~/types";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref([] as ProjectItem[]);
  function fetchProjects() {
    projects.value = [
      {
        name: "Nuxt.js",
        description: "The Intuitive Vue Framework",
        image: "nuxt.png",
        url: "https://nuxtjs.org",
      },
    ];
  }
  return { projects, fetchProjects };
});
