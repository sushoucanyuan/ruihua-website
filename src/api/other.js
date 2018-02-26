import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.domain + '/open/api/other',
  timeout: 5000
})

export default {
  getAbout() {
    return instance.get('getAbout').then(({
      data
    }) => data.content)
  },
  getBannerList() {
    return instance.get('getBannerList').then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getQrcode(params) {
    return instance.get('getQrcode', {
      params
    }).then(({
      data
    }) => config.domain + data.url)
  }
}
