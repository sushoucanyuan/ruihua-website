import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.domain + '/open/api/house',
  timeout: 5000
})

export default {
  getHouseBanners() {
    return instance.get('getHouseBanners').then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getCitys() {
    return instance.get('getCitys').then(({
      data
    }) => data)
  },
  getHouseCount(params) {
    return instance.get('getHouseCount', {
      params
    }).then(({
      data
    }) => data.count)
  },
  getHouse(params) {
    return instance.get('getHouseDetail', {
      params
    }).then(({
      data
    }) => {
      data.picurl = config.domain + data.picurl
      data.planbanners.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getHouses(params) {
    return instance.get('getHouses', {
      params
    }).then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getHotHouses(params) {
    return instance.get('getHotHouses', {
      params
    }).then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getHouseInfo(params) {
    return instance.get('getHouseInfo', params).then(({
      data
    }) => data)
  },
  getHouseInfoDetail(params) {
    return instance.get('getHouseInfoDetail', {
      params
    }).then(({
      data
    }) => data)
  },
  addHousPlanForm(params) {
    return instance.post('addHousPlanForm', params).then(({
      data
    }) => data)
  }
}
