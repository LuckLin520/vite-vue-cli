<template>
    <div>about</div>
    <button @click="$router.go(-1)">返回</button>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
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
<route lang="yml">
meta:
  layout: test
</route>