const getToken = require('../../utils/axiosGetToken')

// Get the authentication to consume the API
const setToken = async () => {
  if(!process.env.TOKEN) {
    await getToken().then(resp => {
      const { access_token } = resp.data
      process.env.TOKEN = access_token		
      return resp.data
    }).catch(err => console.log(err))
  }
}

module.exports = setToken
