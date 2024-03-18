<template>
  <div>
    <Header />
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <Sidebar class="sticky top-[65px] hidden h-[calc(100vh-65px)] py-5 lg:col-span-3 lg:block" />

      <main class="py-5 lg:col-span-6">
        <slot />
      </main>
    </div>
    
    {{ new Date().getFullYear() }} - <strong>Dopejob</strong>
  </div>
</template>
