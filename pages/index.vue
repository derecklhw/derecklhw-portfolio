<template>
  <div class="w-full md:w-5/12 m-auto flex flex-col space-y-8">
    <div>
      <p class="text-4xl font-extrabold">Dereck Lam Hon Wah</p>
    </div>
    <div>
      <p>
        Hey, I am Dereck Lam Hon Wah, a full-stack software engineer based in
        Mauritius.
      </p>
    </div>
    <div>
      <p class="mb-4">Find me on</p>
      <div class="flex flex-wrap gap-x-3 mb-4">
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://github.com/derecklhw"
          target="_blank"
        >
          <Icon name="uil:github" size="24" class="mr-1" />
          <p>Github</p>
        </NuxtLink>
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://www.linkedin.com/in/derecklhw/"
          target="_blank"
        >
          <Icon name="uil:linkedin" size="24" class="mr-1" />
          <p>Linkedin</p>
        </NuxtLink>
        <NuxtLink
          class="flex underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          to="https://x.com/derecklhw"
          target="_blank"
        >
          <Icon name="prime:twitter" size="24" class="mr-1" />
          <p>Twitter</p>
        </NuxtLink>
      </div>
      <p>
        Or mail me at
        <a
          href="mailto:dereck.lamhonwah@gmail.com"
          class="underline underline-offset-4 decoration-slate-700 hover:decoration-slate-100"
          >dereck.lamhonwah@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
