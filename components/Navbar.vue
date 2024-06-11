<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink class="font-bold" to="/">Nuxt Test</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users">Users</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
header {
  height: 60px;
  width: 100%;
}
</style>