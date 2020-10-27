const axios = require('axios')
const { KEY, SECRET_KEY } = require('../config/config')

const getToken = () => {
  return axios({
    url: 'https://api.twitter.com/oauth2/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Accept-Encoding': 'gzip'
    },
    auth: {
      username: KEY,
      password: SECRET_KEY
    },
    params: {
      grant_type: 'client_credentials'
    }
  })
}

module.exports = getToken;