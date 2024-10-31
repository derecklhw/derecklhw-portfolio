<template>
  <div class="h-screen flex flex-col dark:text-white dark:bg-slate-950">
    <AppHeader class="px-6 md:px-24 py-4 md:py-12" />
    <div class="flex-1 overflow-y-scroll px-6 md:px-24 py-4 md:py-12">
      <slot />
    </div>
    <AppFooter class="py-4" />
  </div>
</template>
