const express = require('express')
const setToken = require('../../services/auth')
const { getTweets } = require('../../services/tweets')


const TweetsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.get('/tweets', async (req, res, next) => {
		const tokenData = await setToken()		
		const tweets = await getTweets()		
		res.send(tweets)
	})
}

module.exports = TweetsRouter
