const express = require('express')
const app = express()
const { PORT } = require('./config/config')

const TweetsRouter = require('./routes/tweets')
const StreamsRouter = require('./routes/streams')

app.get('/', (req, res) => {
	res.send('Hello world')
})

TweetsRouter(app)
StreamsRouter(app)


app.listen(PORT, () => {
	console.log(`The server is running in the port https://localhost:${PORT}`)
})

