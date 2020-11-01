const amqp = require('amqplib')
const { RABBITMQ_HOST, QUEUE_NAME } = require('../../config/config')

const consumer = async () => {

  let receivedTweet = {};

  const connection = await amqp.connect(RABBITMQ_HOST)
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE_NAME)

  await channel.consume(QUEUE_NAME, (message) => {
    receivedTweet = JSON.parse(message.content)
    channel.ack(tweet)
  })

  return receivedTweet;

}

module.exports = {
  consumer
}
