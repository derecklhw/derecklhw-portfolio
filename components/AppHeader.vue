<template>
  <header class="flex justify-between items-end">
    <NuxtLink to="/" class="text-2xl font-bold">d.lhw</NuxtLink>
    <nav class="hidden md:flex gap-x-6 lowercase font-medium text-base">
      <NuxtLink
        v-for="item in navMenu"
        :key="item.name"
        :to="item.href"
        :target="item.blank ? '_blank' : '_self'"
      >
        {{ item.name }}
      </NuxtLink>
      <DarkMode />
    </nav>
    <nav class="md:hidden flex gap-x-2 items-end">
      <DarkMode />
      <button popovertarget="mypopover" popovertargetaction="show">
        <Icon name="heroicons-solid:plus" class="size-6" />
      </button>
    </nav>
    <div
      id="mypopover"
      popover
      class="md:hidden h-dvh w-full p-0 dark:text-white dark:bg-slate-950"
    >
      <div class="h-full flex flex-col px-8 py-8">
        <div class="flex-none flex justify-end">
          <button popovertarget="mypopover" popovertargetaction="hidden">
            <Icon name="heroicons-solid:x" class="size-6" />
          </button>
        </div>

        <nav
          class="flex-grow flex flex-col gap-y-6 items-center justify-center uppercase text-xl font-medium"
        >
          <NuxtLink
            class="lowercase font-bold text-3xl"
            to="/"
            @click="hidePopover"
            >d.lhw</NuxtLink
          >
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
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavMenuItem } from "../types";

const navMenu: NavMenuItem[] = [
  { name: "Blogs", href: "/blogs", blank: false },
  { name: "Projects", href: "/projects", blank: false },
  { name: "Talks", href: "/talks", blank: false },
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
