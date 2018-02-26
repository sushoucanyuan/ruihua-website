import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL:  config.domain + '/open/api/trip',
  timeout: 5000
})

export default {
  getTripBannerImg() {
    return instance.get('getTripBannerImg').then(({
      data
    }) => config.domain + data.picurl)
  },
  getTripType() {
    return instance.get('getTripType').then(({
      data
    }) => data)
  },
  getTripCount(triptype) {
    return instance.get('getTripCount', {
      params: {
        triptype
      }
    }).then(({
      data
    }) => data.count)
  },
  getTrips(params) {
    return instance.get('getTrips', {
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
  getHotTrips() {
    return instance.get('getHotTrips').then(({
      data
    }) => {
      data.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  getTripDetail(params) {
    return instance.get('getTripDetail', {
      params
    }).then(({
      data
    }) => {
      data.lightpicurl = config.domain + data.lightpicurl
      data.lightpicurl1 = config.domain + data.lightpicurl1
      data.lightpicurl2 = config.domain + data.lightpicurl2
      data.lightpicurl3 = config.domain + data.lightpicurl3
      data.managebanners.forEach(item => {
        item.picurl = config.domain + item.picurl
      })
      return data
    })
  },
  addTripForm(params) {
    return instance.post('addTripForm', params).then(({
      data
    }) => data)
  }
}
