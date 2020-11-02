const express = require('express')
const { RedisClient } = require('../../../lib/redis')

const ApiRouter = (app) => {
  const router = express.Router()
  app.use(router)

  router.get('/api/tweets', async (req, res, next) => {
    const redis = new RedisClient('Tweets')
    redis.getList(res)
  })
}

module.exports = ApiRouter
