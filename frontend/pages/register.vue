<template>
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
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password_confirmation"
        color="primary"
        label="Password confirmation"
        placeholder="Confirm your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        form: false,
        first_name: null,
        last_name: null,
        terms: false,
        email: null,
        password: null,
        password_confirmation: null,
        loading: false
    }),
    methods: {
        onSubmit() {
            

        },
        required(v) {
            return !!v || 'This field is required'
        }
    }
}
</script>