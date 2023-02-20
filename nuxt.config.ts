// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "title",
          content: "CompassFM Community App",
        },
        {
          name: "description",
          content:
            "Local News Events and Community Group information covering, Kaikaoura, Hurunui, and Waimakariri",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/d32b92998a.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/pro-duotone-svg-icons",
      "@fortawesome/pro-light-svg-icons",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/fontawesome-pro",
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/main.scss" as *;',
        },
      },
    },
  },
});
