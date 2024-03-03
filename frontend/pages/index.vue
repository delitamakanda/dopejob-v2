<script setup>
import {BASE_API_URL} from '../helpers/constants'
const { data: jobs } = await useFetch(`${BASE_API_URL}/jobs/annonce/?ordering=-published_date`)
</script>

<template>
  <div v-if="jobs">
    front page
    <NuxtLink to="/browse">
      Browse
    </NuxtLink>
    <div>
      Newest jobs
          
      <Suspense>
        <Job v-for="job in jobs" :key="job.id" :job="job" />
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>