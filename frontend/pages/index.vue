<template>
    <v-container>
        <div>

            front page
            <NuxtLink to="/browse">Browse</NuxtLink>
        </div>
        <div>
            Newest jobs

            <Job v-for="job in jobs" :key="job.id" :job="job" />

        </div>
    </v-container>
</template>

<script setup>
const { data: jobs } = await useFetch('http://localhost:8000/api/v1/jobs/annonce/?ordering=-published_date')
</script>