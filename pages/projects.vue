<template>
  <div class="w-full m-auto">
    <div class="flex flex-col items-center gap-y-4">
      <h2 class="text-5xl font-bold">Projects</h2>
      <p>Projects that I created or maintaining.</p>
      <div class="flex gap-x-5">
        <NuxtLink to="https://github.com/derecklhw" target="_blank">
          <Icon name="uil:github" size="3em" />
        </NuxtLink>
        <NuxtLink to="https://gitlab.com/derecklhw" target="_blank">
          <Icon name="uil:gitlab" size="3em" />
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
<script setup lang="ts"></script>
