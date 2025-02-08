<template>
  <div class="w-full md:w-5/12 m-auto flex flex-col space-y-8">
    <div>
      <h2 class="text-4xl font-extrabold">Dereck Lam Hon Wah</h2>
    </div>
    <div class="flex flex-col gap-y-8">
      <p>
        Hey, I am Dereck Lam Hon Wah, a full-stack software engineer and open
        source enthusiast.
      </p>
      <div class="flex flex-col gap-y-1">
        <div class="flex gap-x-1">
          <p>Working at</p>
          <NuxtLink
            to="https://www.dodobird.ai/"
            target="_blank"
            class="bg-slate-200 dark:bg-slate-900 px-2 flex"
          >
            <Icon name="my-icons:dodobird" size="22" class="mr-1 mt-1" />
            <p>dodobird.ai</p>
          </NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row gap-x-1">
          <p>Volunteer at</p>
          <div class="flex flex-wrap gap-y-1 md:gap-x-1">
            <NuxtLink
              to="https://frontend.mu/"
              target="_blank"
              class="bg-slate-200 dark:bg-slate-900 px-2 flex"
            >
              <Icon name="my-icons:frontendmu" size="22" class="mr-1 mt-1" />
              <p>Frontend.mu</p>
            </NuxtLink>
            <NuxtLink
              to="https://www.mscc.mu/"
              target="_blank"
              class="bg-slate-200 dark:bg-slate-900 px-2 flex"
            >
              <Icon name="my-icons:mscc" size="22" class="mr-1 mt-1" />
              <p>Mauritius Software Craftsmanship Community</p>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- <p>
        I enjoy giving talks and write blog posts about open source, coding,
        tutorials, etc.
      </p> -->
      <p>I enjoy giving talks about open source, coding, tutorials, etc.</p>
      <p>
        Outside of programming, I enjoy working out, hiking and recently
        starting doing photography.
        <!-- Some of my photos can be found on Instagram. -->Right now I live in
        <NuxtLink
          class="underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          target="_blank"
          to="https://fr.wikipedia.org/wiki/Maurice_(pays)"
        >
          Mauritius</NuxtLink
        >
        and if you are around or traveling to, feel free to reach me out, we
        could have some ☕ or work together.
      </p>
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
            to="https://gitlab.com/derecklhw"
            target="_blank"
          >
            <Icon name="uil:gitlab" size="24" class="mr-1" />
            <p class="font-semibold">Gitlab</p>
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
          <NuxtLink
            class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
            to="https://www.instagram.com/dereck_lhw/"
            target="_blank"
          >
            <Icon name="uil:instagram" size="24" class="mr-1" />
            <p class="font-semibold">Instagram</p>
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
  </div>
</template>
<script setup lang="ts"></script>
