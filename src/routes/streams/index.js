const express = require('express')
const setToken = require('../../services/auth')
const streamRules = require('../../utils/streamRules')
const setRulesToDelete = require('../../utils/setRulesToDelete')

const { postStreamRules, getStreamsRules, deleteStreamRules } = require('../../services/streams')

const StreamsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.post('/streams/new/rules', async (req, res, next) => {

    const tokenData = setToken()
		const { rules, description } = req.body
		// Add rules to the tweets stream
    const body = streamRules(rules, description)
		const stream = await postStreamRules(body)
		res.send(stream)
	})
	
	router.get('/streams/rules', async (req, res, next) => {
    const tokenData = await setToken()
    const currentRules = await getStreamsRules() 
    res.send(currentRules)
	})

	router.post('/streams/delete/rules', async (req, res, next) => {
		const tokenData = await setToken()

		const { rules } = req.body
		const body = setRulesToDelete(rules)
		const currentRules = await deleteStreamRules(body)

		res.send(currentRules)
	})

}

module.exports = StreamsRouter
