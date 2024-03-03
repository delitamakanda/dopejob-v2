<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const links = ref([
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog'},
])

const logout = () => {
  userStore.clearToken()
}
</script>

<template>
  <div>
    <NuxtLink to="/">
      Dopejob
    </NuxtLink>
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/browse">
      Browse
    </NuxtLink>
    <NuxtLink v-if="!userStore?.user?.isAuthenticated" to="/register">
      Signup
    </NuxtLink>
    <NuxtLink v-if="!userStore?.user?.isAuthenticated" to="/login">
      Login
    </NuxtLink>
    <NuxtLink v-if="userStore?.user?.isAuthenticated" to="/" @click="logout">
      Logout
    </NuxtLink>

    <div>
      <slot />
    </div>

    <div v-for="link in links" :key="link.name">
      <NuxtLink :to="link.to">
        {{ link.name }}
      </NuxtLink>
      {{ new Date().getFullYear() }} - <strong>Dopejob</strong>
    </div>
  </div>
</template>
