<script setup>
import { onMounted } from 'vue'
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#111827': 'white')
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

onMounted(() => {
  userStore.initStore()
})
useHead({
  meta: [
    { charset: 'utf-8'},
    { name: 'viewport', content: 'width=device-width, initial-scale=1'},
    { name: 'theme-color', content: color }
  ]
})

useSeoMeta({
  titleTemplate: 'Dopejob v2',
})
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
