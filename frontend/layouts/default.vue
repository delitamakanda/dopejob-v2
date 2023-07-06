<template>
    <v-app>
        <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = !rail "
        v-if="userStore?.user?.isAuthenticated"
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
          <v-list-item to="/" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item to="/account" prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item to="/createjob" prepend-icon="mdi-account-group-outline" title="Create job" value="createjob"></v-list-item>
          <v-list-item to="/myjobs" prepend-icon="mdi-account-group-outline" title="My jobs" value="myjobs"></v-list-item>
        </v-list>
      </v-navigation-drawer>
        <v-app-bar app flat :fixed="true" :elevation="2">
            <NuxtLink to="/">Dopejob</NuxtLink>
            <v-spacer></v-spacer>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/browse">Browse</NuxtLink>
            <NuxtLink v-if="!userStore?.user?.isAuthenticated" to="/register">Signup</NuxtLink>
            <NuxtLink v-if="!userStore?.user?.isAuthenticated" to="/login">Login</NuxtLink>
            <NuxtLink v-if="userStore?.user?.isAuthenticated" to="/" @click="logout">Logout</NuxtLink>
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

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const drawer = ref(true);
const rail = ref(true);
const links = ref([
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog'},
]);

async function logout() {
  await userStore.clearToken();
}
</script>
