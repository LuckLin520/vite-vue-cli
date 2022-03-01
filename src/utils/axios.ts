import axios from 'axios'
import { useTestStore } from '@/store/test'

export const request = (config: object) => {

    // const testStore = useTestStore()
    const $axios = axios.create({
        baseURL: import.meta.env.VITE_APP_BASE_API,
        timeout: 60000
    })

    $axios.interceptors.request.use((config: any) => {
        if (!config.data) config.data = {}
		if (/^get$/i.test(config.method)) {
			config.params = config.data
			delete config.data
		}
		if (localStorage.getItem('token')) config.headers.common['token'] = localStorage.getItem('token')
        return config
    }, error => {
        Promise.reject(error)
    })

    $axios.interceptors.response.use(res => {
        console.log(res)
        return res
    }, error => {
        return Promise.reject(error)
    })

    return $axios(config)
}
