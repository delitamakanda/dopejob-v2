<template>
    <v-app>
        <v-app-bar app flat :fixed="true" :elevation="2">
            <v-app-bar-nav-icon />
            <NuxtLink to="/">Dopejob</NuxtLink>
            <v-spacer></v-spacer>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/browse">Browse</NuxtLink>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>

        <v-footer class="bg-grey-lighten-1">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link.name" color="white" variant="text" class="mr-2" rounded="xl"><NuxtLink :to="link.to">{{ link.name  }}</NuxtLink></v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{  new Date().getFullYear() }} - <strong>Dopejob</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    setup() {
        const links = [
            { name: 'Home', to: '/' },
            { name: 'About us', to: '/about-us' },
            { name: 'Team', to: '/team' },
            { name: 'Services', to: '/services' },
            { name: 'Blog', to: '/blog'},
            { name: 'Contact us', to: '/contact-us' },
            { name: 'Login', to: '/login' },
            { name: 'Register', to: '/register' },
        ];

        return {
            links
        }
    }
}
</script>
