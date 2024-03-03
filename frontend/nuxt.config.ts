// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [process.env.NUXT_UI_PRO_PATH ?? '@nuxt/ui-pro'],
    hooks: {
        'components:extend': (components) => {
            const globals = components.filter((component) => {
                return ['UButton'].includes(component.pascalName)
            })
            globals.forEach((c) => c.global = true)
        }
    },
    ui: {
        icons: ['heroicons', 'simple-icons'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    },
    devtools: {
        enabled: true
    },
    ssr: false,
    ogImage: {
        enabled: false
    },
    sourcemap: {
        client: false,
        server: false
    },
    modules: [
        '@pinia/nuxt',
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxt/image',
        'nuxt-og-image',
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts',
        '@nuxtjs/fontaine',
        '@nuxthq/studio'
    ]
})

