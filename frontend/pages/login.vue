<template>
    <v-container>
        <form
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :readonly="loading"
          :rules="[]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-alert color="error" v-for="error in errors" :key="error">
          {{ error }}
        </v-alert>

        <v-btn
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
        </form>
    </v-container>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const router = useRouter();
const email = ref("");
const password = ref("");
const loading = ref(false);
const errors = ref([]);
const userStore = useUserStore();

async function onSubmit(e) {
  e.preventDefault();
  loading.value = true;
    await $fetch('http://localhost:8000/api/v1/token/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    }).then(res => {
      router.push({ path: '/'});
      userStore.setToken(res.auth_token);
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }).catch(err => {
      console.log(err)
      if (err.response) {
        for (const property in err.response._data) {
          errors.value.push(err.response._data[property]);
        }
        console.error(JSON.stringify(err.response));
      } else if (err.message) {
        errors.value.push("Something went wrong");
        console.error(JSON.stringify(err));
      }
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });
}
</script>