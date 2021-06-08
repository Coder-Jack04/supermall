import axios from 'axios'
export function request(config) {
  // 创建axios实例
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })

  // 使用拦截器(响应拦截和请求拦截)
  // 请求拦截
  axiosInstance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  // 响应拦截
  axiosInstance.interceptors.response.use(response => {
    return response
  }, err => {
    return err
  })

  // 返回实例对象
  return axiosInstance(config)
}