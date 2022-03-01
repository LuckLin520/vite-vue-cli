/**
 * csr
 */
// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from "vue-router"
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'
// import App from './App.vue'

// createApp(App)
// .use(
//     createRouter({
//         history: createWebHistory(),
//         routes: setupLayouts(generatedRoutes)
//     })
// )
// .mount('#app')

/**
 * ssg
 */
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from "vite-ssg"
import App from './App.vue'
const routes =  setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
})