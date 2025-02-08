<template>
  <div class="w-full md:w-5/12 m-auto flex flex-col space-y-8">
    <div>
      <h2 class="text-4xl font-extrabold">Dereck Lam Hon Wah</h2>
    </div>
    <div class="flex flex-col gap-y-4">
      <p>
        Hey, I am Dereck Lam Hon Wah, a full-stack software engineer based in
        Mauritius.
      </p>
      <div class="flex flex-col gap-y-1">
        <div class="flex gap-x-1">
          <p>Working at</p>
          <NuxtLink
            to="https://www.dodobird.ai/"
            class="bg-slate-200 dark:bg-slate-900 px-1 flex"
          >
            <Icon name="my-icons:dodobird" size="22" class="mr-1 mt-1" />
            <p>dodobird.ai</p>
          </NuxtLink>
        </div>
        <div class="flex gap-x-1">
          <p>Volunteer at</p>
          <NuxtLink
            to="https://frontend.mu/"
            class="bg-slate-200 dark:bg-slate-900 px-1 flex"
          >
            <Icon name="my-icons:frontendmu" size="22" class="mr-1 mt-1" />
            <p>Frontend.mu</p>
          </NuxtLink>
          <NuxtLink
            to="https://www.mscc.mu/"
            class="bg-slate-200 dark:bg-slate-900 px-1 flex"
          >
            <Icon name="my-icons:mscc" size="22" class="mr-1 mt-1" />
            Mauritius Software Craftsmanship Community
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-y-6">
      <p>Find me on</p>
      <div class="flex flex-wrap gap-x-3">
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://github.com/derecklhw"
          target="_blank"
        >
          <Icon name="uil:github" size="24" class="mr-1" />
          <p class="font-semibold">Github</p>
        </NuxtLink>
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://www.linkedin.com/in/derecklhw/"
          target="_blank"
        >
          <Icon name="uil:linkedin" size="24" class="mr-1" />
          <p class="font-semibold">Linkedin</p>
        </NuxtLink>
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://x.com/derecklhw"
          target="_blank"
        >
          <Icon name="prime:twitter" size="24" class="mr-1" />
          <p class="font-semibold">Twitter</p>
        </NuxtLink>
      </div>
      <p>
        Or mail me at
        <a
          href="mailto:dereck.lamhonwah@gmail.com"
          class="underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          ><code> dereck.lamhonwah@gmail.com </code></a
        >
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
