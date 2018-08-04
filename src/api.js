import axios from 'axios'

const pre = path => `https://api.imgur.com/3${path}`

const key = require('./config/secret.json').IMGUR_KEY

const config = {
  headers: {
    'Authorization': `CLIENT-ID ${key}`
  }
}

const get = path =>
  axios
    .get(pre(path), config)
    .catch(error => console.log(error))

export const testApi = () =>
  get('/tags')
    .then(response => response.data.data)

export const search = (sort = 'time', window = 'day', page = '0', query = 'polandball') =>
  get(`/search/${sort}/${window}/${page}/?q=${query}`)
    .then(response => response.data.data)
