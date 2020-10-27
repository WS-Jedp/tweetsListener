require('dotenv').config()

const config = {
	SECRET_KEY: process.env.API_SECRET_KEY,
	TOKEN: process.env.TOKEN,
	KEY: process.env.API_KEY,
	PORT: 3000,
	ENDPOINT: 'https://api.twitter.com'
}

module.exports = config
