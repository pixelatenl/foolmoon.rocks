module.exports = {
  loading: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'www.foolmoon.rocks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: 'Official website of Fool Moon, a Dutch rock band' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/main.scss'],
  /*
  ** Nuxt Sass Resources
  */
  modules: [

    // or array of paths
    ['nuxt-sass-resources-loader', [
        '@/assets/scss/_variables.scss'
    ]]

  ],
  /*
  ** Plugins
  */

 plugins: [
  { src: '~/plugins/vue-instagram', ssr: false },
  { src: '~plugins/ga.js', ssr: false },
  '~plugins/filters.js'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
