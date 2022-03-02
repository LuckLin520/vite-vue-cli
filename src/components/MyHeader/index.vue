<template>
    <n-card>
        <ul>
            <li>
                <router-link to="/">index</router-link>
            </li>
            <li>
                <router-link to="/about">about</router-link>
            </li>
            <li>
                <n-space>
                    <n-button type="primary" @click="onLogin">登录</n-button>
                    <n-button @click="testStore.logout">注销</n-button>
                    <span>{{testStore.userData.userName}}</span>{{testStore.message}}--{{testStore.arr}}--
                    <!-- <span>{{testStore.userData}}</span> -->
                </n-space>
            </li>
        </ul>
    </n-card>
</template>
<script setup lang="ts">
import Cookies from 'js-cookie'
import { useTestStore } from '@/store/test'
import { onMounted, onServerPrefetch } from 'vue'
const testStore = useTestStore()

// ssg异步数据示例
onServerPrefetch(async () => {
    await testStore.asyncData()
})

// vite-ssg没有后端所以没有req没有cookie，更没有window
onMounted(() => {
    testStore.save({userData: Cookies.getJSON('userData') || {}})
})

const onLogin = async () => {
    await testStore.login({
        userAccount: "admin",
        userPwd: "123456"
    })
}
</script>
<style scoped lang="less">
ul {
    display: flex;
    li {
        margin: 0 1em;
        padding: 5px;
    }
}
</style>

