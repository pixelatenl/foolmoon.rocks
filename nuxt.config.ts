export default defineNuxtConfig({
  // Static hosting: pages are prerendered to HTML for crawlers,
  // output via `nuxt generate`
  ssr: true,

  compatibilityDate: "2026-10-21",

  devtools: { enabled: false },

  modules: ["@nuxt/eslint"],

  // Global page headers
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "www.foolmoon.rocks",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Official website of Fool Moon, a Dutch rock band",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Fool Moon | Dutch rock band",
        },
        {
          property: "og:description",
          content: "Official website of Fool Moon, a Dutch rock band",
        },
        { property: "og:url", content: "https://www.foolmoon.rocks/" },
        {
          property: "og:image",
          content: "https://www.foolmoon.rocks/og-image.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
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
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
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
