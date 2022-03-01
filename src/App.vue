<template>
    <n-config-provider :theme-overrides="data.themeOverrides" :abstract="true">
        <n-el tag="div" id="appRoot">
            <router-view/>
        </n-el>
    </n-config-provider>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import themes from '@/assets/themes'
const data = reactive({
    themeOverrides: themes
})

onMounted(() => {
    setTimeout(() => {
        data.themeOverrides.common!.primaryColor = 'purple'
        data.themeOverrides.common!.primaryColorHover = 'orange'
    }, 2000)
})

</script>
<style lang="less">
    body,p,h1,h2,h3,h4,ul,dl,dd,input{margin: 0;padding: 0;}
    i,em{font-style: normal;}
    ul li{list-style: none;}
    img{border: 0;vertical-align: top;}
    body{font: 12px/1.5 "Microsoft YaHei",Arial;}
    :root,body,#app,#appRoot{height: 100%;}
</style>
