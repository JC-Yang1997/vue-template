import axios from 'axios'

// var BASR_URL

axios.defaults.baseURL = '/api'

// if(process.env.NODE_ENV === 'development'){
//     BASR_URL = "https://m.piaoniu.com"
// } else if (process.env.NODE_ENV === 'production'){
//     BASR_URL = "https://m.piaoniu.com"
// }

const apiRequest = axios.create({
  // baseURL: BASR_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// 请求拦截器
apiRequest.interceptors.request.use(
  config => {
    config.timeout = 100000
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
apiRequest.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      return {
        message: '系统异常',
        code: response.status,
        data: response.data
      }
    }
  },
  error => {
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

const request = (method, url, data, type) => {
  method = method.toLocaleLowerCase()
  if (method === 'post') {
    return apiRequest.post(url, data)
  } else if (method === 'get') {
    return apiRequest.get(url, {
      params: data
    })
  }
}

export default request
