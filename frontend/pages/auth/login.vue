<template>
  <div>
    <form
      @submit.prevent="onSubmit"
    >
      <input
        v-model="email"
        :readonly="loading"
        class="mb-2"
        label="Email"
      >

      <input
        v-model="password"
        type="password"
        :readonly="loading"
        clearable
        label="Password"
        placeholder="Enter your password"
      >

      <br>

      <div v-for="error in errors" :key="error" color="error">
        {{ error }}
      </div>

      <button
        block
        color="success"
        size="large"
        type="submit"
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errors = ref([])
const userStore = useUserStore()
// const storage = useStorage()
// const key = 'session:token'

async function onSubmit(e) {
  e.preventDefault()
  loading.value = true
    await $fetch('http://localhost:8000/api/v1/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    }).then((res) => {
      router.push({ path: '/'})
      userStore.setToken(res.auth_token)
      // await storage.setItem(key, res.auth_token)
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }).catch(err => {
      console.log(err)
      if (err.response) {
        for (const property in err.response._data) {
          errors.value.push(err.response._data[property])
        }
        console.error(JSON.stringify(err.response))
      } else if (err.message) {
        errors.value.push('Something went wrong')
        console.error(JSON.stringify(err))
      }
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })
}
</script>