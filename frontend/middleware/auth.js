import { useUserStore } from "~/stores/user"

export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to)
    console.log(from)
    const userStore = useUserStore();

    if (userStore.user.token === null) {
        return navigateTo('/login');
    } else if (userStore.user.token !== null && to?.path === '/login') {
        return navigateTo('/');
    } else if (userStore.user.token !== null && to?.path !== '/login') {
        return navigateTo(to?.path);
    }
})