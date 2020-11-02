const amqp = require('amqplib')
const { RABBITMQ_HOST, QUEUE_NAME } = require('../../config/config')

const publisher = async (tweet) => {

  const connection = await amqp.connect(RABBITMQ_HOST)
  const channel = await connection.createChannel()

  await channel.assertQueue(QUEUE_NAME)

  const sent = channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(tweet)), {
    persistent: true
  })

  if(sent) {
    
   return {
      error: false,
      message: `Tweet ${tweet.id} was send to the queue ${QUEUE_NAME}`,
   }
  } else {
    connection.close()
    return {
      error: `Tweet ${tweet.id} wasn't send to the queue ${QUEUE_NAME}, something failed`,
    }
    process.exit(0)
  }

}

module.exports = {
  publisher
}