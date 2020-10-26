const express = require('express')
const axiosRequest = require('../../utils/axiosRequest')

const TweetsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.get('/tweets', (req, res, next) => {
		const body = {
			add: [
				{value: "cat", tag: "cats"}
			]
		}
		const data = JSON.stringfy(body)
		axiosRequets('POST', data).then(resp => console.log(resp.data)).catch(err => console.error(err))
	})
}

module.exports = TweetsRouter
