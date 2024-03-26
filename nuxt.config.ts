// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  app: {
      head: {
          title: 'Blog Pirat | Blogging über wie mans nicht macht',
          htmlAttrs: {
              lang: 'de',
          },
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1.0' },
              { hid: 'description', name: 'description', content: 'Blub' },
              { name: 'format-detection', content: 'telephone=no' },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      },
      pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase','@nuxt/image'],

  supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_SERVICE_KEY,
      redirectOptions: {
          exclude: ['/rants','/','/blog/**','/blog', '/about', '/about/**', '/impressum', '/impressum/**', '/datenschutz', '/datenschutz/**', '/projekte', '/projekte/**']
      }
  },

  css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  runtimeConfig: {
    public: {
        proxyUrl: process.env.PROXY_URL,
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_SERVICE_KEY,
    }
  },

  build: {
      transpile: [
          '@fortawesome/fontawesome-svg-core',
          '@fortawesome/pro-solid-svg-icons',
          '@fortawesome/pro-regular-svg-icons',
          '@fortawesome/pro-light-svg-icons',
          '@fortawesome/free-brands-svg-icons'
      ]
  },

  devtools: {
    timeline: {
      enabled: true
    }
  }
})