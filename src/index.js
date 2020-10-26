const express = require('express')
const app = express()
const { PORT } = require('./config/config')

const TweetsRouter = require('./routes/tweets')

app.get('/', (req, res) => {
	res.send('Hello world')
})

TweetsRouter(app)


app.listen(PORT, () => {
	console.log(`The server is running in the port https://localhost:${PORT}`)
})

