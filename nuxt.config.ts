// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    // fallback: "light",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  icon: {
    customCollections: [{ prefix: "my-icons", dir: "./assets/my-icons" }],
  },
  runtimeConfig: {
    public: {
      githubPersonalAccessToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    },
  },
});
