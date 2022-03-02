import { defineStore } from "pinia"
import { request } from '@/utils/axios'
import Cookies from "js-cookie"

export const useTestStore = defineStore('test', {
    state() {
        return {
            message: '傲娇啊',
            userData: {} as any,
            arr: [0,1,2]
        }
    },
    actions: {
        save(payload: object) {
            for(let key in payload) this[key] = payload[key]
        },
        async login(payload: object) {
            const { data } = await request({ url: '/admin/admin/login', data: payload, method: 'POST' })
            if(data.status) {
                this.userData = data.data
                Cookies.set('userData', this.userData)
            }
        },
        async logout() {
            this.userData = {}
            Cookies.remove('userData')
        }
    }
})
