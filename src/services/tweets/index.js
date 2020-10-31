const { fetchRequest } = require('../../utils/fetchRequests')
const { ENDPOINT_GET_TWEETS } = require('../../config/config')

const getTweets = async () => {
  const data = await fetchRequest(ENDPOINT_GET_TWEETS)
  const resp = await data.json()
  return resp;
}

module.exports = {
  getTweets
}
