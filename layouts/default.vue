<template>
  <div
    class="h-screen flex flex-col dark:text-white dark:bg-black overflow-y-auto"
  >
    <AppHeader class="px-8 md:px-10 py-6 md:py-8" />
    <div class="flex-1 px-8 md:px-10 py-6">
      <slot />
    </div>
    <AppFooter class="py-6" />
  </div>
</template>
