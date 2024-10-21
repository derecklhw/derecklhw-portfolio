<template>
  <div class="h-screen flex flex-col">
    <AppHeader />
    <div class="flex-1 overflow-y-scroll">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
