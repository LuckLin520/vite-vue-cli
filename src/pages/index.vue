<template>index page</template>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    console.log(import.meta.env.VITE_APP_BASE_API)
})
</script>
