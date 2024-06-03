<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside>
    <div class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/browse">
        Browse
      </NuxtLink>
      <NuxtLink
        v-if="!userStore?.user?.
          isAuthenticated" to="/auth/register"
>
        Signup
      </NuxtLink>
      <NuxtLink
        v-if="!userStore?.user?.
          isAuthenticated" to="/auth/login"
>
        Login
      </NuxtLink>
      <NuxtLink
        v-if="userStore?.user?.
          isAuthenticated" to="/" @click="logout"
>
        Logout
      </NuxtLink>
      <SidebarItem :links="menu" />
      <div class="mt-auto">
        <SidebarItem :links="bottomMenu" />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const logout = () => {
    userStore.clearToken()
}

const bottomMenu = [
    {
        title: 'Help',
        icon: 'heroicons:question-mark-circle',
        href: '/help',
        active: false,
    },
    {
        title: 'Blog',
        icon: 'heroicons:newspaper',
        href: '/blog',
        active: false,
    },
    {
        title: 'Sign Out',
        icon: 'heroicons:arrow-left-on-rectangle',
        href: '/',
        active: false,
        onClick: logout,
    }
]
const menu = [
    {
        title: 'Home',
        icon: 'heroicons:home',
        href: '/',
        active: false,
    },
    {
        title: 'Jobs',
        icon: 'heroicons:briefcase',
        items: [
            { title: 'List', href: '/jobs'},
            { title: 'Create', href: '/jobs/create'},
        ]
    },
    {
        title: 'Analytics',
        icon: 'heroicons:chart-pie',
        items: [
            { title: 'Overview', href: '/analytics'},
            { title: 'Statistics', href: '/stats'},
            { title: 'Trends', href: '/trends'},
        ]
    }
]
</script>