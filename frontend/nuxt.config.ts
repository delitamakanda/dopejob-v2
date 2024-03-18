// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss: {
        exposeConfig: true,
    },
    headlessui: { prefix: 'H' },
    app: {
        head: {
            title: 'Dopejob',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel:'stylesheet' }
            ]
        }
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        vue: {
            script: {
                defineModel: true,
                propsDestructure: true
            }
        },
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
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@nuxt/content',
        '@nuxt/image',
        'nuxt-og-image',
        '@vueuse/nuxt',
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
        '@nuxtjs/fontaine',
        '@nuxthq/studio',
        '@morev/vue-transitions/nuxt'
    ]
})

