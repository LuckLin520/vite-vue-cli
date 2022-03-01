import { defineStore } from "pinia"
import { request } from '@/utils/axios'
import Cookies from "js-cookie"

export const useTestStore = defineStore('test', {
    state() {
        return {
            message: '傲娇啊',
            userData: Cookies.getJSON('userData') || {},
            arr: [0,1,2]
        }
    },
    actions: {
        async login(payload: object) {
            const { data } = await request({ url: '/admin/admin/login', data: payload, method: 'POST' })
            if(data.status) {
                this.userData = data.data
                Cookies.set('userData', this.userData)
                console.log(Cookies.getJSON('userData'))
            }
        },
        async logout() {
            this.userData = {}
            Cookies.remove('userData')
        }
    }
})
