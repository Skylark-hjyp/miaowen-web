import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '127.0.0.1', // 此前端项目的IP地址
        port: 5173, // 此前端项目的端口号
        open: true, //表示在启动开发服务器时，会自动打开浏览器并访问指定的地址
        proxy: {
            // 会将/api前面的内容替换为target地址
            '/api': {
                target: 'http://localhost:8080/', // 后端接口域名
                changeOrigin: true, //是否跨域
                ws: true, //是否代理 websockets
                secure: true, //是否https接口
                rewrite: (path) => path.replace(/^\/api/, ''),
                // pathRewrite: {
                //     '^/api': '' // 假如我们的地址是 /api/member/getToken 会转化为 /member/getToken
                // },
                bypass(req, res, options) {
                    console.log('req', req.url)
                    const realUrl =
                        options.target + (options.rewrite ? options.rewrite(req.url) : '')
                    console.log(realUrl)
                    res.setHeader('A-realurl', realUrl) // 添加响应标头,A-realurl为自定义命名，在浏览器中显示
                }
            }
        }
    }
})
