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
                    <span>{{userData.userName}}</span>{{message}}--{{arr}}
                    <!-- <span>{{testStore.userData}}</span> -->
                </n-space>
            </li>
        </ul>
    </n-card>
</template>
<script setup lang="ts">
import { useTestStore } from '@/store/test'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const testStore = useTestStore()
const {userData, arr, message}: any = storeToRefs(testStore)

onMounted(() => {
    console.log(userData.userName)
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

