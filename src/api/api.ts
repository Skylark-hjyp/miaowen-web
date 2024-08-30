import axios from 'axios'

export const http = axios.create({
    // baseURL: 'http://',
    timeout: 6000,
    headers: {}
})

export function loadArticleList(page: number, pageSize: number) {
    return http.get('/api/article/selectByPage', {
        params: {
            page: page,
            pageSize: pageSize
        }
    })
}

const Api = {
    login: (name) => {
        console.log(name)
        return http.get('/api/hello', {
            params: {
                name: name
            }
        })
    },

    login1: (user) => {
        return http.post(user)
    }
}

export default Api
