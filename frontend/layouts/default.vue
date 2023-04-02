<template>
    <v-app>
        <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = !rail "
        v-if="userStore.user.isAuthenticated"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
        <v-app-bar app flat :fixed="true" :elevation="2">
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
import { useUserStore } from '~/stores/user';

export default {
    setup() {
        const userStore = useUserStore();
        const drawer = ref(true);
        const rail = ref(true);
        const items = [
          { title: 'Home', icon: 'mdi-home-city' },
          /* { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },*/
        ];
        const links = [
            { name: 'Home', to: '/' },
            { name: 'Team', to: '/team' },
            { name: 'Services', to: '/services' },
            { name: 'Blog', to: '/blog'},
        ];

        if (!userStore.user.isAuthenticated) {
            links.push(
                { name: 'Login', to: '/login' },
                { name: 'Register', to: '/register' }
            );
        } else {
            links.push(
                { name: 'Create job', to: '/createjob' },
                { name: 'My jobs', to: '/myjobs' }
            );
        }
        const openRail = () => {
            rail.value =!rail.value;
        }

        return {
            links,
            drawer,
            rail,
            items,
            userStore,
            openRail
        }
    }
}
</script>
