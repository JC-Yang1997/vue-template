import request from '@/utils/axios'

export const testApi = (params) => {
  return request('get', '/api/v2/home/recommends', params)
}
