import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePages from './plugins/vitePages'
import viteLayouts from './plugins/viteLayouts'
import unpluginVueComponents from './plugins/unpluginVueComponents'

// https://vitejs.dev/config/
export default ({mode}) => 
    defineConfig({
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src")
            }
        },
        server: {
            host: '0.0.0.0',
            port: 3001,
            proxy: {
                '/api': loadEnv(mode, process.cwd()).VITE_APP_BASE_API //读取.env.*变量
            }
        },
        plugins: [vue(), vitePages(), viteLayouts(), unpluginVueComponents()],
        css: {
            preprocessorOptions: {
              less: {
                  javascriptEnabled: true,
                  additionalData:  `@import "${path.resolve(__dirname, 'src/assets/app.less')}";`
              }
          }
        },
        // @ts-ignore 
        ssgOptions: {// https://github.com/antfu/vite-ssg/issues/161
            script: 'async',
            formatting: 'minify',
            format: 'cjs'
        }
    })

