<template>
    <my-header/>
    <div>default layout</div>
    <router-view />
</template>
<script setup lang="ts">
    import { useHead } from '@vueuse/head'
    useHead({
        title: 'default Website Title',
        meta: [
            {
            name: `description`,
            content: `default description`,
            },
            {
            name: `keywords`,
            content: `default keywords,default keywords,default keywords`,
            },
        ]
    })
</script>