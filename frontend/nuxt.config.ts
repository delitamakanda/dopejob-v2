// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    },
    ssr: false,
    sourcemap: {
        client: false,
        server: false
    },
    modules: [
        '@pinia/nuxt',
        '@nuxt/ui',
    ]
})

