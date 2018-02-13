import axios from 'axios'

const instance = axios.create({
  baseURL: 'open/api/fund',
  timeout: 5000
})

export default {
  getFundBannerImg() {
    return instance.get('getFundBannerImg').then(({
      data
    }) => data.picurl)
  },
  getFunds(params) {
    return instance.get('getFunds', {
      params
    }).then(({
      data
    }) => data)
  },
  getFundCount() {
    return instance.get('getFundCount').then(({
      data
    }) => data.count)
  },
  getFundDetail(params) {
    return instance.get('getFundDetail', {
      params
    }).then(({
      data
    }) => data)
  }
}
