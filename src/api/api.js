import axios from 'axios'

const http = axios.create({
    // baseURL: 'http://',
    timeout: 6000,
    headers: {}
})

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
