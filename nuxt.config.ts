export default defineNuxtConfig({
  // Static hosting: SPA rendered client-side, output via `nuxt generate`
  ssr: false,

  compatibilityDate: "2026-10-21",

  devtools: { enabled: false },

  modules: ["@nuxt/eslint"],

  // Global page headers
  app: {
    head: {
      title: "www.foolmoon.rocks",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        {
          name: "description",
          content: "Official website of Fool Moon, a Dutch rock band",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
        },
      ],
    },
  },

  // Global CSS
  css: ["~/assets/scss/main.scss"],

  // Auto import components
  components: true,
});
