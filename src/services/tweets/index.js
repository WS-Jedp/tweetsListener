const util = require('util')
const fs = require('fs')
const streamPipeline  = util.promisify(require('stream').pipeline)

const { fetchRequest, fetchStreamRequest } = require('../../utils/fetchRequests')
const { ENDPOINT_GET_TWEETS } = require('../../config/config')
const MockTweets = require('../../mocks/MocksTweets')

const getTweets = async () => {
  const data = await fetchStreamRequest(ENDPOINT_GET_TWEETS)
  const resp = await data.text()
  
  // MOCKS
  const Mocks = await MockTweets
  const res = Mocks.data
  return res
}

module.exports = {
  getTweets
}
