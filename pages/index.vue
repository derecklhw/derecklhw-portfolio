<template>
  <div class="w-full lg:w-11/12 2xl:w-7/12 m-auto flex flex-col space-y-8">
    <div>
      <h2 class="text-4xl font-extrabold">I'm Dereck Lam Hon Wah</h2>
      <p>A Full-Stack Software Engineer and Open-source Enthusiast</p>
    </div>
    <div class="flex flex-col gap-y-8">
      <div class="flex flex-col gap-y-1">
        <div class="flex gap-x-1">
          <p>Working at</p>
          <NuxtLink
            v-for="item in [workingAt]"
            :to="item.url"
            target="_blank"
            class="bg-zinc-200 dark:bg-zinc-900 px-2 flex"
          >
            <Icon :name="item.icon" size="22" class="mr-1 mt-1" />
            <p>{{ item.name }}</p>
          </NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row gap-x-1">
          <p>Volunteering at</p>
          <div class="flex flex-wrap gap-y-1 md:gap-x-1">
            <NuxtLink
              v-for="item in volunteerAt"
              :to="item.url"
              target="_blank"
              class="bg-zinc-200 dark:bg-zinc-900 px-2 flex"
            >
              <Icon :name="item.icon" size="22" class="mr-1 mt-1" />
              <p>{{ item.name }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <p>
        I love giving talks
        <!-- and write blogs posts -->about open source, coding, tutorials,
        etc... And outside of programming, I enjoy working out, hiking and
        recently photography.
        <!-- Some of my photos can be found on Instagram. -->
      </p>
      <p>
        Right now I live in
        <NuxtLink
          class="font-normal underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
          target="_blank"
          to="https://fr.wikipedia.org/wiki/Maurice_(pays)"
        >
          Mauritius</NuxtLink
        >
        and if you are around or thinking of traveling to, feel free to reach
        out, we could have some ☕ or 🧗together.
      </p>
      <div class="flex flex-col gap-y-3">
        <p>Find me on</p>
        <div class="flex flex-wrap gap-x-3">
          <NuxtLink
            v-for="item in socialMedia"
            class="flex underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
            :to="item.url"
            target="_blank"
          >
            <Icon :name="item.icon" size="24" class="mr-1" />
            <p class="font-semibold">{{ item.name }}</p>
          </NuxtLink>
        </div>
        <p>
          Or mail me at
          <a
            href="mailto:dereck.lamhonwah@gmail.com"
            class="underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
            ><code> dereck.lamhonwah@gmail.com </code></a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SocialMediaItem, CompanyInfoItem } from "~/types";

const socialMedia: SocialMediaItem[] = [
  {
    name: "Github",
    icon: "uil:github",
    url: "https://github.com/derecklhw",
  },
  // {
  //   name: "Gitlab",
  //   icon: "uil:gitlab",
  //   url: "https://gitlab.com/derecklhw",
  // },
  {
    name: "Linkedin",
    icon: "uil:linkedin",
    url: "https://www.linkedin.com/in/derecklhw",
  },
  // {
  //   name: "Twitter",
  //   icon: "prime:twitter",
  //   url: "https://x.com/derecklhw",
  // },
  // {
  //   name: "Instagram",
  //   icon: "uil:instagram",
  //   url: "https://www.instagram.com/dereck_lhw",
  // },
];

const workingAt: CompanyInfoItem = {
  name: "dodobird.ai",
  icon: "my-icons:dodobird",
  url: "https://www.dodobird.ai/",
};

const volunteerAt: CompanyInfoItem[] = [
  {
    name: "Frontend.mu",
    icon: "my-icons:frontendmu",
    url: "https://frontend.mu/",
  },
  {
    name: "Mauritius Software Craftsmanship Community",
    icon: "my-icons:mscc",
    url: "https://www.mscc.mu/",
  },
];
</script>
