import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import citys from './data/citys'
import house from './data/house'
import houses from './data/houses'
import hotHouses from './data/hotHouses'
import housesInfo from './data/houseInfo'

const mock = new MockAdapter(axios, {
  delayResponse: 0
})

mock
  .onGet('/getCitys').reply(200, citys)
  .onGet('/getHouse').reply(200, house)  
  .onGet('/getHouses').reply(200, houses)
  .onGet('/getHotHouses').reply(200, hotHouses)
  .onGet('/getHouseInfo').reply(200, housesInfo)
  .onGet('/getHousesPage').reply(200, 18)
  .onGet('/getTripBannerImg').reply(200, '/static/bg.png')
  .onGet('/getTripDetail').reply(200, {})
  .onGet('/getHotTrips').reply(200, [])
  .onGet('/getTrips').reply(200, [])

export default mock
