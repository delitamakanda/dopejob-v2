<script setup>
defineProps({
    my: {
        type: [Boolean],
        default: false
    },
    job: {
        type: [Object],
        required: true
    }
})
</script>

<template>
  <div>
    <NuxtLink :to="`/browse/${job.id}`">
      {{ job.title }} 
      <br>{{ job.position_salary }}
      <br>
      {{ job }}
    </NuxtLink>
  </div>
</template>