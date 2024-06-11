<template>
  <PageContainer title="Users List" >
    <div class="mb-8">
      <NuxtLink class="btn" to="/users/add-user">Add User</NuxtLink>
    </div>
    <div class="overflow-y-auto overflow-x-auto min-h-full">
      <table class="table-auto w-full min-w-20">
        <thead class="text-sm font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th class="p-2 whitespace-nowrap text-left">Firstname</th>
            <th class="p-2 whitespace-nowrap text-left">Lastname</th>
            <th class="p-2 whitespace-nowrap text-left">Email</th>
            <th class="p-2 whitespace-nowrap text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-100">
          <tr v-for="user in users" :key="user">
            <td class="p-2 whitespace-nowrap text-left text-base">{{user.firstName}}</td>
            <td class="p-2 whitespace-nowrap text-left text-base">{{user.lastName}}</td>
            <td class="p-2 whitespace-nowrap text-left text-base">{{user.email}}</td>
            <td class="p-2 whitespace-nowrap text-right">
              <NuxtLink :to="`/users/update/${user.id}`" class="material-icons text-3xl text-green-400 cursor-pointer">
                edit
              </NuxtLink>
              <span @click="deleteUser(user.id)" class="material-icons text-3xl text-red-400 cursor-pointer">
                delete
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageContainer>
</template>

<script setup>
import { toast } from "@steveyuowo/vue-hot-toast";
import { onMounted } from 'vue'
  defineComponent("Users-list");
  const { data: users, refresh } = await useFetch('https://crud-project-nuxt3.vercel.app/users')
  const deleteUser = async (id) => {
    await $fetch('https://crud-project-nuxt3.vercel.app/users/'+id,{
      method:'delete',
      onResponse({ response }) {
      if (response.status === 200) {
        toast({
          message: 'User deleted successfully',
          type: 'success',
          position:'bottom-right'
        });
        refresh()
      }
    },
    onResponseError() {
      toast({
        message: `Failed to delete user`,
        type: 'error',
      });
    }
    })
  }
    
</script>

<style  scoped>
</style>