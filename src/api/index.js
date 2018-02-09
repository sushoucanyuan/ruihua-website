import axios from 'axios'

axios.defaults.baseURL = '/open/api/'

export default {
  getCitys() {
    return axios.get('getCitys').then(({
      data
    }) => data)
  },
  getHousesPage(params) {
    return axios.get('getHousesPage', params).then(({
      data
    }) => data)
  },
  getHouse(params) {
    return axios.get('getHouse', params).then(({
      data
    }) => data)
  },
  getHouses(params) {
    return axios.get('getHouses', params).then(({
      data
    }) => data)
  },
  getHotHouses(params) {
    return axios.get('getHotHouses', params).then(({
      data
    }) => data)
  },
  getHouseInfo(params) {
    return axios.get('getHouseInfo', params).then(({
      data
    }) => data)
  }
}
