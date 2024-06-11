<template>
  <PageContainer title="Add user"> 
      <form @submit.prevent="handleSubmit">
        <label>firstName:</label>
        <input type="text" v-model="firstName" required />
        <label>lastName:</label>
        <input type="text" v-model="lastName" required />
        <label>email:</label>
        <input type="email" v-model="email" required />
        <label>password:</label>
        <input type="password" v-model="password" required />
        <button type="submit" class="rounded py-3 px-7 mx-auto block mt-5 text-white uppercase font-semibold bg-green-500">Add User</button>
      </form>
  </PageContainer>
</template>
<script setup>
defineComponent("Add-user");
import { ref } from "vue";
import { useUser } from "../../composables/states.js";
import { toast } from "@steveyuowo/vue-hot-toast";
import { useRouter  } from 'vue-router'
const router = useRouter();
const user = useUser();
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const handleSubmit = async (e) => {
  e.preventDefault()
  user.value = {
    ...user.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };
  await $fetch('http://localhost:3000/users', {
    method: 'post',
    body: user.value,
    onResponse({ response }) {
      if (response.status === 201) {
        toast({
          message: 'User added successfully',
          type: 'success',
          duration: 3000,
          position:'bottom-right'
        });
        router.push('/users')
      }
    },
    onResponseError() {
      toast({
        message: `Failed to add user`,
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

</style>