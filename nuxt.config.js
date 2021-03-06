module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'dock-hack',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#FFFFFF'
  },
  router: {
    middleware: ['isLoggedIn']
  },
  modules: ['@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  },
  mode: 'spa',
  manifest: {
    name: 'DockHack',
    short_name: 'DH',
    title: 'DockHack',
    'og:title': 'DockHack',
    description: 'DockHack',
    'og:description': 'DockHack',
    lang: 'ja',
    theme_color: '#2b5876',
    background_color: '#2b5876'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, {
      isDev,
      isClient
    }) {
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
}
