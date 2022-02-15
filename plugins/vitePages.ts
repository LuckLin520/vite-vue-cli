import VitePages from "vite-plugin-pages"
export default () =>
    VitePages({
        pagesDir: "src/pages",
        nuxtStyle: true,
        routeBlockLang: 'yml', //json5 yaml
        extendRoute(route) {
            // console.log(route.path)
            // 这里为了测试这个方法的效果，就是判断一下路由中包含了fruit字符串的，更换layout
            // if (route.path.includes('fruit')) {
            //     return {
            //         ...route,
            //         meta: { layout: 'home' },
            //     }
            // }
            return route
        },
        // 整体处理整个routes的信息，然后进行相应的处理
        onRoutesGenerated(routes) {
            let temp_routes = JSON.parse(JSON.stringify(routes))
            temp_routes = temp_routes.filter(v => {
                return !/\S+\/components(\/\S+)?/.test(v.component)
            })
            return temp_routes
        },
        // 这里涉及到更改客户端代码
        onClientGenerated(clientCode) {
            // 能够完整获取到我们实际生成的路由的完整代码，string格式的，
            // 感觉可以通过正则对这个方法进行替换，或者各种字符串骚操作进行替换
            return clientCode
        },
    })