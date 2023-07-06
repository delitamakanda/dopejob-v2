<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const { data: jobs } = await useFetch(`http://localhost:8000/api/v1/jobs/my-annonce/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${userStore.user.token}`
    }
})

definePageMeta({
    middleware: ['auth']
});
</script>

<template>
    <v-container>
        <h1>My jobs</h1>

        <Job :my="true" v-for="job in jobs" :key="job.id" :job="job"></Job>
    </v-container>
</template>