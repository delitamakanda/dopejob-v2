<script setup>
const route = useRoute()
const { data: article } = await useAsyncData('article', () => queryContent(`/blog/${route.params.id}`).findOne())
</script>

<template>
  <div class="w-full">
    <div class="w-full">
      <h1 class="text-6xl font-bold">
        {{ article.title }}
      </h1>
    </div>
    <div
      class="flex flex-col items-center"
    >
      <img
        v-if="article.image"
        :src="`/images/${article.image}`"
        class="max-w-3xl "
        :alt="`image for ${article.title} article`"
      >
      <ContentRenderer :value="article" class="prose mt-4" />
    </div>
  </div>
</template>