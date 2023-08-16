import { createResolver } from '@nuxt/kit'
import colors from 'tailwindcss/colors'
import module from '../src/module'
import { excludeColors } from '../src/colors'
import pkg from '../package.json'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
<<<<<<< HEAD
  extends: process.env.NUXT_ELEMENTS_PATH || '@nuxthq/elements',
=======
  extends: '@nuxt-themes/ui-kit',

>>>>>>> de4bf7bb885638425bc37b928c070c97e292202d
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    // '@nuxthq/studio',
    module,
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'nuxt-component-meta',
    'nuxt-lodash'
  ],

  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
    safelistColors: excludeColors(colors)
  },
<<<<<<< HEAD
  content: {
    sources: {
      // overwrite default source AKA `content` directory
      content: {
        prefix: '/dev',
        driver: 'fs',
        base: resolve('./content')
      },
      main: {
        prefix: '/main',
        driver: 'github',
        repo: 'nuxtlabs/ui',
        branch: 'main',
        dir: 'docs/content'
      }
    }
  },
=======

>>>>>>> de4bf7bb885638425bc37b928c070c97e292202d
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },

  routeRules: {
    '/': { redirect: '/getting-started', prerender: false }
  },

  nitro: {
    prerender: {
      routes: ['/getting-started', '/dev/getting-started']
    }
  },

  experimental: {
    payloadExtraction: false
  },

  componentMeta: {
    globalsOnly: true,
    exclude: [resolve('./components'), resolve('@nuxthq/elements/components')],
    metaFields: {
      props: true,
      slots: false,
      events: false,
      exposed: false
    }
  },

  typescript: {
    strict: false,
    includeWorkspace: true
  },
<<<<<<< HEAD
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {}
    // ...other options
=======

  devtools: {
    timeline: {
      enabled: true
    }
>>>>>>> b124749566ad7efe539b115eb418e42b302571af
  }
})
