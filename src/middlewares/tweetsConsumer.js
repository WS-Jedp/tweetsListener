const { RABBITMQ_HOST, QUEUE_NAME } = require('../config/config')
const { RedisClient } = require('../lib/redis')
const amqp = require('amqplib')

const tweetsConsumer = async (req, res, next) => {
  const redis = new RedisClient('Tweets')

  const connection = await amqp.connect(RABBITMQ_HOST)
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE_NAME)
  await channel.consume(QUEUE_NAME, (message) => {
    const content = JSON.parse(message.content)
    redis.pushItem(content)
    channel.ack(message)
  })
  next()
}

module.exports = {
  tweetsConsumer
}
