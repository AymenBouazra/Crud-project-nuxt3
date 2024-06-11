<template>
  <div class="flex w-100 ">
    <aside class="shadow-sm bg-slate-800">
      <nav class="mx-auto p-4 flex justify-between flex-col">
        <NuxtLink class="font-bold sidebar-title mb-10" to="/">Sidebar hotel</NuxtLink>
        <ul class="flex flex-col gap-2 text-white">
          <li class="sidebar-items">
            <NuxtLink class="sidebar-link" to="/">Home</NuxtLink>
          </li>
          <li class="sidebar-items">
            <NuxtLink class="sidebar-link" to="/users">Users</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="container">
      <Navbar />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {};
</script>

<style  scoped>
aside {
  min-width: 250px;
  height: 100vh;
}

a.sidebar-link {
  display: block;
  border-radius: 4px;
  padding: 8px;
}
.sidebar-items a.router-link-exact-active {
  background: #12b488;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  transition: 1.5s all;
}
.sidebar-items {
  transition: 1.5s all;
  width: 100%;
}
a.sidebar-title {
  color: #00ce89;
  font-size: 22px;
}
</style>