<script setup>
const { data: jobs } = await useFetch('http://localhost:8000/api/v1/jobs/annonce/?ordering=-published_date');
</script>

<template>
    <v-container>
        <div>

            front page
            <NuxtLink to="/browse">Browse</NuxtLink>
        </div>
        <div>
            Newest jobs
            
            <Suspense>
                <Job v-for="job in jobs" :key="job.id" :job="job" />
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>


        </div>
    </v-container>
</template>