import axios from 'axios';
import { BASE_URL, TIMEOUT, devTestBaseURL } from "./config";


function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  })

  //请求拦截
  instance.interceptors.request.use((res) => {

    return res
  }, (error) => {

    return Promise.reject(error)
  })

  // 捕获http状态码错误
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      if (err.response) {
        // 错误信息
        console.log(err.response);
      }
    })
  })
}

export default request;


export function requestTest(config) {
  const instance = axios.create({
    baseURL: devTestBaseURL,
    timeout: TIMEOUT
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  })

  //请求拦截
  instance.interceptors.request.use((res) => {

    return res
  }, (error) => {

    return Promise.reject(error)
  })

  // 捕获http状态码错误
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      if (err.response) {
        // 错误信息
        console.log(err.response);
      }
    })
  })
}


export function requestNew(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: TIMEOUT
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  })

  //请求拦截
  instance.interceptors.request.use((res) => {

    return res
  }, (error) => {

    return Promise.reject(error)
  })

  // 捕获http状态码错误
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      if (err.response) {
        // 错误信息
        console.log(err.response);
      }
    })
  })
}
