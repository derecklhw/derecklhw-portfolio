<template>
  <div class="h-screen flex flex-col dark:text-white dark:bg-slate-950">
    <AppHeader class="px-6 py-4 md:px-12 md:py-8" />
    <div class="flex-1 overflow-y-scroll px-6 md:px-12 py-2">
      <slot />
    </div>
    <AppFooter class="py-4" />
  </div>
</template>
