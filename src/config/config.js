require('dotenv').config()

const config = {
	SECRET_KEY: process.env.API_SECRET_KEY,
	TOKEN: process.env.BEARER_TOKEN,
	KEY: process.env.API_KEY,
	PORT: 3000,
	ENDPOINT: 'https://api.twitter.com/2/tweets/search/stream/rules'
}

module.exports = config
