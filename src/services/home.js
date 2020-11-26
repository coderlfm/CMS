import request, { requestTest } from './request.js'

/**
 * 获取测试数据
 */
export const getTestDataApi = params => request({ url: 'test', method: 'GET', params })


export const getTestApi = () => requestTest({ url: '', method: 'get' })