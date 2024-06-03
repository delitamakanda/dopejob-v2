<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- Container of flex -->
    <div class="container flex h-16 items-center justify-between">
      <!-- Logo and page title -->
      <div class="flex items-center gap-3">
        <button
          aria-label="Open menu"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background lg:hidden"
          @click="isOpen = true"
        >
          <span class="sr-only">Button used to open menu</span>
          <Icon name="heroicons:bars-2" />
        </button>
        <!-- Logo -->
        <img
          src="https://img.logoipsum.com/284.svg"
          alt="Dopejob logo"
          class="h-7 w-7 object-contain"
        >
        <!-- Page title -->
        <NuxtLink class="text-xl font-bold" to="/">
          Dopejob
        </NuxtLink>
      </div>

      <!-- Right side of header -->
      <div class="flex items-center gap-5">
        <button
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
          @click="toggleTheme"
        >
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>

        <!-- Profile Dropdown menu -->
        <HMenu as="div" class="relative">
          <HMenuButton
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
          >
            <img
              src="https://randomuser.me/api/portraits/med/women/75.jpg"
              alt="Logged in user"
              class="h-full w-full"
            >
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="font-semibold">
                  Hello Kyara
                </p>
                <a href="mailto:johndoe@test.com" class="leading-none text-muted-foreground">johndoe@test.com</a>
              </div>
              <div class="p-1">
                <template v-for="(p, i) in profileMenuOptions" :key="i">
                  <HMenuItem v-if="!p.divider" v-slot="{ active }">
                    <NuxtLink :class="[active && 'bg-muted']" class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium" :to="p.href">
                      {{ p.title }}
                    </NuxtLink>
                  </HMenuItem>
                  <hr v-if="p.divider" class="my-1">
                </template>
              </div>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
      </div>
    </div>
    <!-- Mobile menu -->
    <MobileMenu v-model="isOpen" />
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const mode = useColorMode()
const toggleTheme = () => {
    mode.value = mode.value === 'dark'? 'light' : 'dark'
}
const profileMenuOptions = [
  { title: 'Profile', href: '/auth/profile' },
  { title: 'Settings', href: '/settings' },
  { divider: true },
  { title: 'Sign out', href: '/' },
]

</script>