import axios from 'axios'

const pre = path => `https://api.imgur.com/3${path}`

const key = require('./secret.json').IMGUR_KEY

const config = {
  headers: {
    'Authorization': `CLIENT-ID ${key}`
  }
}

export const testApi = () =>
  axios
    .get(pre('/tags'), config)
    .then(response => response.data.data)
    .catch(error => console.log(error))
