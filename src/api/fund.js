import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.domain + '/open/api/fund',
  timeout: 5000
})

export default {
  getFundBannerImg() {
    return instance.get('getFundBannerImg').then(({
      data
    }) => config.domain + data.picurl)
  },
  getFunds(params) {
    return instance.get('getFunds', {
      params
    }).then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
        item.picurl1 = config.domain + item.picurl1
      })
      return data
    })
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
    }) => {
      data.picurl = config.domain + data.picurl
      return data
    })
  },
  addFundForm(params) {
    return instance.post('addFundForm', params).then(({
      data
    }) => data)
  }
}
