<template>
  <header class="flex justify-between items-end">
    <AppLogo />
    <div class="hidden md:flex gap-x-6">
      <nav class="flex gap-x-6">
        <NuxtLink
          v-for="item in navMenu"
          :key="item.name"
          :to="item.href"
          class="lowercase text-lg font-medium"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
      <DarkMode size-class="size-6" />
    </div>
    <div class="md:hidden flex gap-x-2">
      <DarkMode size-class="size-8" />
      <button popovertarget="mypopover" popovertargetaction="show">
        <PlusSolid class="size-8" />
      </button>
    </div>
    <div
      id="mypopover"
      popover
      class="h-dvh w-full p-4 dark:text-white dark:bg-slate-950"
    >
      <div class="flex justify-end">
        <button popovertarget="mypopover" popovertargetaction="hidden">
          <XSolid class="size-8" />
        </button>
      </div>
      <nav
        class="flex flex-col gap-y-6 h-full items-center justify-center pb-12"
      >
        <NuxtLink
          v-for="item in navMenu"
          :key="item.name"
          :to="item.href"
          class="uppercase text-2xl font-medium"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import PlusSolid from "./Icons/PlusSolid.vue";
import XSolid from "./Icons/XSolid.vue";

const navMenu = [
  { name: "Talks", href: "/talks" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "https://derecklhw.github.io/derecklhw-cv/" },
];
</script>
