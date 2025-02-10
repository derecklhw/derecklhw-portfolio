import { defineStore } from "pinia";
import type { ProjectItem } from "~/types";
import { Octokit } from "octokit";

export const useProjectsStore = defineStore("projects", () => {
  const config = useRuntimeConfig();
  const octokit = new Octokit({
    auth: config.public.githubPersonalAccessToken,
  });

  const projects = ref([] as ProjectItem[]);
  async function fetchProjects() {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: "derecklhw",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    projects.value = response.data.map((project: any) => ({
      name: project.name,
      description: project.description,
      image:
        "https://idobe.engineering.ualberta.ca/wp-content/plugins/elementor/assets/images/placeholder.png",
      url: project.html_url,
    }));
  }
  return { projects, fetchProjects };
});
