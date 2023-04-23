<script setup>
    const route = useRoute()
    const { data: job } = await useFetch(`http://localhost:8000/api/v1/jobs/annonce/${route.params.id}/`)
</script>

<template>
    <v-container>
        detail page
        {{ job.title }}
        <br/>
        {{ job.description }}
        <br/>
        {{  job }}
    </v-container>
</template>
