<script setup>
const props = defineProps({
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
        {{ job.title }} {{ job.position_salary }} {{ job }}
    </div>
</template>