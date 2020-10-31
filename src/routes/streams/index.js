const express = require('express')
const setToken = require('../../services/auth')
const streamRules = require('../../utils/streamRules')

const { postStreamRules, getStreamsRules } = require('../../services/streams')

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

}

module.exports = StreamsRouter
