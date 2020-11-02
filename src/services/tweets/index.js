const { fetchRequest } = require('../../utils/fetchRequests')
const { ENDPOINT_GET_TWEETS } = require('../../config/config')
const MockTweets = require('../../mocks/MocksTweets')

const getTweets = async () => {
  const data = await fetchRequest(ENDPOINT_GET_TWEETS)
  const resp = await data.json()

  // MOCKS
  // const data = await MockTweets
  // const resp = data.data
  return resp;
}

module.exports = {
  getTweets
}
