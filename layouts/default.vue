<template>
    <div>
        <Sidebar>
            <div class="container mx-auto p-4">
                <slot />
            </div>
        </Sidebar>
        <Toaster />
    </div>
    
</template>

<script setup>
    import Sidebar from '~/components/Sidebar.vue';
    import { Toaster} from "@steveyuowo/vue-hot-toast";
    import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
</script>

<style scoped>

</style>