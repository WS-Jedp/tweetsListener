const express = require('express')
const app = express()
const { PORT } = require('./config/config')

const TweetsRouter = require('./routes/tweets')
const StreamsRouter = require('./routes/streams')
const AppRouter = require('./routes/app')

const ApiRouter = require('./routes/api/tweets')

const { tweetsConsumer } = require('./middlewares/tweetsConsumer')


// Middlewares
app.use(tweetsConsumer)
app.use(express.json())

// Routes
AppRouter(app)
TweetsRouter(app)
StreamsRouter(app)

// Api
ApiRouter(app)

app.listen(PORT, () => {
	console.log(`The server is running in the port https://localhost:${PORT}`)
})

