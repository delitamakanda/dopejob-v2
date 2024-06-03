<script setup>
const { data: blog } = await useAsyncData('blog', () => queryContent('/blog').find())
console.log(blog)
</script>

<template>
  <div class="w-full">
    <div>
      <h1 class="text-6xl font-bold">
        Blog
      </h1>
    </div>
    <div>
      <UCard v-for="(item, i) in blog" :key="i">
        <template #header>
          <h2 class="text-2xl font-bold">
            {{ item.title }}
          </h2>
        </template>
        <img v-if="item.image" :src="`/images/${item.image}`" class="w-full" :alt="`image for ${item.title} article`">
        <p class="mt-4 font-medium text-gray-500">
          {{ item.description }}
        </p>
        <template #footer>
          <ULink :to="item._path" class="hover:underline hover:text-blue-500">
            Read More
          </ULink>
        </template>
      </UCard>
    </div>
  </div>
</template>