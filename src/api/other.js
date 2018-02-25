import axios from 'axios'

const instance = axios.create({
  baseURL: 'open/api/other'
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
    }) => data)
  },
  getQrcode(params) {
    return instance.get('getQrcode', {
      params
    }).then(({
      data
    }) => data.url)
  }
}
