const { consumer } = require('../lib/consumer')
const { RedisClient } = require('../lib/redis')

const tweetsConsumer = async (req, res, next) => {
  const currentTweets = await consumer()
  next()
}

module.exports = {
  tweetsConsumer
}
