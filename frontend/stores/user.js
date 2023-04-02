import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        user: {
            isAuthenticated: false,
            email: null,
            token: null
        }
    }),
    actions: {
        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('token')) {
                this.user.token = localStorage.getItem('token')
                this.user.isAuthenticated = true
            }
        },
        setToken(token) {
            this.user.token = token
            localStorage.setItem('token', token)
            this.user.isAuthenticated = true
        },
        clearToken() {
            this.user.token = null
            localStorage.removeItem('token')
            this.user.isAuthenticated = false
        }

    }
})