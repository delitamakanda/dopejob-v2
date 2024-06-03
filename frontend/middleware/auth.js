import { useUserStore } from '~/stores/user'
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt'

export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to)
    console.log(from)
    const userStore = useUserStore()

    if (userStore.user.token === null) {
        return navigateTo('/auth/login')
    } else if (userStore.user.token !== null && to?.path === '/auth/login') {
        return navigateTo('/browse')
    } else if (userStore.user.token !== null && to?.path !== '/auth/login') {
        return navigateTo(to?.path)
    }
})