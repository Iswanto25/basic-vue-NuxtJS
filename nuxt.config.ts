// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['public/assets/stylesheet/style.css'],
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
        }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
          integrity: 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
        },
        {
          src: 'https://kit.fontawesome.com/24c28a14e5.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  modules: ["@nuxt/image"]
})