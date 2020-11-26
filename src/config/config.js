require('dotenv').config()

const config = {
	SECRET_KEY: process.env.API_SECRET_KEY,
	BEARER_TOKEN: 'AAAAAAAAAAAAAAAAAAAAAAylJAEAAAAASN5russDvrl7Z5O9u5SZkDGhrvE%3DkSOEjCqDiM1sI9zTq2dxdvc4ipi6Xu1wTZb1GvRsYCqZ0FHsR3',
	KEY: process.env.API_KEY,
	PORT: 3000,
	ENDPOINT_AUTH: 'https://api.twitter.com/oauth2/token',
	ENDPOINT_GET_TWEETS: 'https://api.twitter.com/2/tweets/search/stream',
	ENDPOINT_RULES: 'https://api.twitter.com/2/tweets/search/stream/rules',
	RABBITMQ_HOST: process.env.RABBITMQ_HOST,
	REDIS_HOST: process.env.REDIS_HOST,
	QUEUE_NAME: 'Tweets',
	ENV: process.env.ENV
}

module.exports = config
