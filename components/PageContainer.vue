<template>
  <div
    class="page-container flex flex-col shadow-md overflow-y-auto h-screen bg-white rounded-lg">
    <div
      class="bg-slate-300 p-4 rounded-t-md">
      <span class="text-xl font-semibold uppercase text-black ">{{title}}</span>
      {{btn}}
    </div>
    <div class="p-5 min-h-80 bg-white">
      <slot/>
    </div>
  </div>
</template>

<script setup>
  defineProps(['title','btn'])
</script>

<style scoped>
.page-container{
  max-height: calc(100vh - 92px);
}
</style>