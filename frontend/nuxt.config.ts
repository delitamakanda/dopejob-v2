// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        "/admin": { ssr: false }
    },
    nitro: {
        prerender: {
            routes: ['/help', '/blog', 'settings']
        }
    },
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
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@nuxt/image',
        'nuxt-og-image',
        '@vueuse/nuxt',
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
        '@nuxtjs/fontaine',
        '@morev/vue-transitions/nuxt',
        '@nuxt/content',
        '@nuxt/ui',
        '@nuxt/test-utils/module'
    ]
})