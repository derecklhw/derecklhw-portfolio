<template>
  <header class="flex justify-between items-end">
    <AppLogo />
    <div class="hidden md:flex gap-x-6">
      <nav class="flex gap-x-6 items-end lowercase font-medium">
        <NuxtLink
          v-for="item in navMenu"
          :key="item.name"
          :to="item.href"
          :target="item.blank ? '_blank' : '_self'"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
      <DarkMode />
    </div>
    <div class="md:hidden flex gap-x-2 items-end">
      <DarkMode />
      <button popovertarget="mypopover" popovertargetaction="show">
        <PlusSolid class="size-6" />
      </button>
    </div>
    <div
      id="mypopover"
      popover
      class="h-dvh w-full p-4 dark:text-white dark:bg-slate-950"
    >
      <div class="flex justify-end">
        <button popovertarget="mypopover" popovertargetaction="hidden">
          <XSolid class="size-6" />
        </button>
      </div>

      <nav
        class="flex flex-col gap-y-6 h-full items-center justify-center pb-12 uppercase text-xl font-medium"
      >
        <NuxtLink to="/" @click="hidePopover">Home</NuxtLink>
        <NuxtLink
          v-for="item in navMenu"
          :key="item.name"
          :to="item.href"
          :target="item.blank ? '_blank' : '_self'"
          @click="hidePopover"
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
  { name: "Talks", href: "/talks", blank: false },
  { name: "Projects", href: "/projects", blank: false },
  {
    name: "Resume",
    href: "https://derecklhw.github.io/derecklhw-cv/",
    blank: true,
  },
];

const hidePopover = () => {
  document.getElementById("mypopover")?.hidePopover();
};
</script>
