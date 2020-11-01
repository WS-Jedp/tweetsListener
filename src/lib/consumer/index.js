const amqp = require('amqplib')
const { RABBITMQ_HOST, QUEUE_NAME } = require('../../config/config')
const { RedisClient } = require('../redis')

const consumer = async () => {

  const redis = new RedisClient('Tweets')

  const connection = await amqp.connect(RABBITMQ_HOST)
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE_NAME)
  await channel.consume(QUEUE_NAME, (message) => {
    const content = JSON.parse(message.content)
    redis.pushItem(content)
    channel.ack(message)
  })

}

module.exports = {
  consumer
}
