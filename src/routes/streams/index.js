const express = require('express')
const setToken = require('../../services/auth')
const streamRules = require('../../utils/streamRules')
const setRulesToDelete = require('../../utils/setRulesToDelete')

const { postStreamRules, getStreamsRules, deleteStreamRules } = require('../../services/streams')

const StreamsRouter = (app) => {
	const router = express.Router()
	app.use(router)

	router.get('/streams/new/rules', async (req, res, next) => {

    const tokenData = setToken()
    
		// Add rules to the tweets stream
    const rules = streamRules()
		const stream = await postStreamRules(rules)
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
