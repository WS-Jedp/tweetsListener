const express = require('express')
const setToken = require('../../services/auth')
const { getTweets } = require('../../services/tweets')
const { publisher } = require('../../lib/publisher')


const TweetsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.get('/tweets', async (req, res, next) => {
		const tokenData = await setToken()		
		const tweets = await getTweets()
		const lastTweet = tweets[tweets.length - 1]

		const data = await publisher(tweets[tweets.length - 1]) 

		console.log("")
		data.error ? res.send(data.error) : res.send(data.message)
	})
}

module.exports = TweetsRouter
