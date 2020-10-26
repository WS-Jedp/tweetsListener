require('dotenv').config()

const config = {
	SECRET_KEY: process.env.API_SECRET_KEY,
	TOKEN: process.env.BEARER_TOKEN
	KEY: process.env.API_KEY
}

module.exports = config
