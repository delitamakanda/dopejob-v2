<script setup>
const email = ref('');
const first_name = ref('');
const last_name = ref('');
const password = ref('');
const password_confirmation = ref('');
const isTermsAgreed = ref(false);
const errors = ref([]);
const router = useRouter();

async function handleSubmit(e) {
  console.log(email.value, first_name.value, last_name.value, password)
  e.preventDefault();
  errors.value = [];
  await $fetch('http://localhost:8000/api/v1/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: email.value,
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      password: password.value,
    })
  }).then(res => {
      console.log(res)
      router.push({path: '/login'})
    }).catch(err => {
      console.log(err)
      if (err.response) {
        for (const property in err.response._data) {
          errors.value.push(err.response._data[property]);
        }
        console.error(JSON.stringify(err.response));
      } else if (error.message) {
        errors.value.push("Something went wrong");
        console.error(JSON.stringify(error));
      }
    });
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <v-card
     class="mx-auto"
     max-width="344"
     title="User Registration"
   >
     <v-container>
       <v-text-field
         v-model="first_name"
         color="primary"
         label="First name"
         variant="underlined"
       ></v-text-field>
 
       <v-text-field
         v-model="last_name"
         color="primary"
         label="Last name"
         variant="underlined"
       ></v-text-field>
 
       <v-text-field
         v-model="email"
         color="primary"
         label="Email"
         variant="underlined"
       ></v-text-field>
 
       <v-text-field
         v-model="password"
         color="primary"
         label="Password"
         type="password"
         placeholder="Enter your password"
         variant="underlined"
       ></v-text-field>
 
       <v-text-field
         v-model="password_confirmation"
         color="primary"
         type="password"
         label="Password confirmation"
         placeholder="Confirm your password"
         variant="underlined"
       ></v-text-field>
 
       <v-checkbox
         v-model="isTermsAgreed"
         color="secondary"
         label="I agree to site terms and conditions"
       ></v-checkbox>
     </v-container>
 
     <v-divider></v-divider>

    <div v-if="errors?.value?.length > 0">
      <v-alert color="error" v-for="error in errors.value" :key="error">
        {{error}}
      </v-alert>
    </div>
 
     <v-card-actions>
       <v-spacer></v-spacer>
 
       <v-btn type="submit" color="success">
         Complete Registration
 
         <v-icon icon="mdi-chevron-right" end></v-icon>
       </v-btn>
     </v-card-actions>
   </v-card>
  </form>
</template>