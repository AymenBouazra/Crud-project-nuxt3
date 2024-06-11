<template>
    <PageContainer title="Update user"> 
      <form @submit.prevent="handleSubmit">
        <label>firstName:</label>
        <input type="text" v-model="firstName" required />
        <label>lastName:</label>
        <input type="text" v-model="lastName" required />
        <label>email:</label>
        <input type="email" v-model="email" required />
        <label>password:</label>
        <input type="password" v-model="password" required />
        <button type="submit" class="rounded py-3 px-7 mx-auto block mt-5 text-white uppercase font-semibold bg-green-500">Update User</button>
      </form>
  </PageContainer>
</template>

<script setup>
defineProps(['id'])
import { ref, watchEffect } from "vue";
import { useUser } from "../../composables/states.js";
import { toast } from "@steveyuowo/vue-hot-toast";
import { useRouter, useRoute} from 'vue-router'
const router = useRouter();
const route = useRoute()
const userToUpdate = useUser();
const {data: user} = useFetch('http://localhost:3000/users/'+route.params.id);
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
watchEffect(() => {
  if (user.value) {
    firstName.value = user.value.firstName || '';
    lastName.value = user.value.lastName || '';
    email.value = user.value.email || '';
    password.value = user.value.password || '';
  }
});
const handleSubmit = async (e) => {
  e.preventDefault()
  userToUpdate.value = {
    ...userToUpdate.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };
  await $fetch('http://localhost:3000/users/'+route.params.id, {
    method: 'patch',
    body: userToUpdate.value,
    onResponse({ response }) {
      if (response.status === 200) {
        toast({
          message: 'User updated successfully',
          type: 'success',
          duration: 3000,
          position:'bottom-right'
        });
        router.push('/users')
      }
    },
    onResponseError() {
      toast({
        message: `Failed to updated user`,
        type: 'error',
         duration: 3000,
      });
    }
  });
};
</script>

<style scoped>
form {
  background: white;
  padding: 10px;
}

label {
  display: block;
  color: #6e6e6e;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 4px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
</style>