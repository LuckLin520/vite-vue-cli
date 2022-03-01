<template>
    <div class="containner">
        <div>about</div>
        <n-input v-model:value="message"/>
        <n-button @click="$router.go(-1)">返回</n-button>
    </div>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useTestStore } from '@/store/test'
import { storeToRefs } from 'pinia'
const { message } = storeToRefs(useTestStore())

useHead({
    title: 'about Website Title',
    meta: [
        {
            name: `description`,
            content: `about description`,
        },
        {
            name: `keywords`,
            content: `about keywords,about keywords,about keywords`,
        },
    ],
})
</script>
<style scoped lang="less">
.containner {
    background-color: var(--primary-color);
    width: @mainWidth;
}
</style>
<route>
meta:
  layout: test
</route>
