import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    },
    hooks: {
        'vite:extendConfig': (config) => {
            config.plugins?.push(
                vuetify({
                    autoImport: true,
                    styles: { configFile: resolve('./settings.scss')},
                })
            )
        }
    },
    sourcemap: {
        client: false,
        server: false
    },
    modules: [
        '@pinia/nuxt',
    ]
})

