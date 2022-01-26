export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Haresh Vekriya Portfolio | hvekriya",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "I am a UX Designer based in London. Experienced in creating user centric websites and apps. I also love to get my hands dirty and like to code websites." },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false },
  '~plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/prismic",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    "@nuxtjs/axios"
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: [
        'assets/main.scss',
    ]
  },

  //Prismic CMS
  prismic: {
    endpoint: "https://hvekriya.cdn.prismic.io/api/v2",
    accessToken: process.env.VUE_APP_PRISMIC,
    disableGenerator: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
