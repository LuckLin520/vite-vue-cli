import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import vitePages from './plugins/vitePages'
import viteLayouts from './plugins/viteLayouts'

// https://vitejs.dev/config/
export default ({mode}) => 
    defineConfig({
        resolve: {
            alias: {
                "@": join(__dirname, "./src")
            }
        },
        server: {
            host: '0.0.0.0',
            port: 3001,
            proxy: {
                '/api': loadEnv(mode, process.cwd()).VITE_APP_BASE_API //读取.env.*变量
            }
        },
        plugins: [vue(), vitePages(), viteLayouts()],
    })

