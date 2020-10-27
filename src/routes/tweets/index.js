const express = require('express')
const axiosRequest = require('../../utils/axiosRequest')
const getToken = require('../../utils/axiosGetToken')

const { KEY, SECRET_KEY } = require('../../config/config')

const TweetsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.get('/tweets', async (req, res, next) => {
	// Get the authentication to consume the API
		if(!process.env.TOKEN) {
			await getToken().then(resp => {
				const { access_token } = resp.data
				process.env.TOKEN = access_token		
			}).catch(err => console.log(err))
		}

		const data = {
			add: [
				{value: 'cat has:image', tag: 'cats with images'}
			]
		}
		await JSON.stringify(data)

		axiosRequest('POST', data, 'https://api.twitter.com/2/tweets/search/stream/rules').then(resp => console.log(resp)).catch(err => console.error(err))
	})
}

module.exports = TweetsRouter
