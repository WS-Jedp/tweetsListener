const express = require('express')
const webpack = require('webpack')
const app = express()
const { PORT, ENV } = require('./config/config')

const TweetsRouter = require('./routes/tweets')
const StreamsRouter = require('./routes/streams')
const AppRouter = require('./routes/app')

const ApiRouter = require('./routes/api/tweets')
const GraphqlTweets = require('./routes/api/graphqlTweets')

const { tweetsConsumer } = require('./middlewares/tweetsConsumer')


// Middlewares
app.use(tweetsConsumer)
app.use(express.json())

const isDevEnv = (ENV === 'development')
if(isDevEnv) {
  const webpackConfig = require('../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)
  const serverConfig = { serverSideRender: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
}

// Routes
TweetsRouter(app)
StreamsRouter(app)

// Views
AppRouter(app)

// Api
ApiRouter(app)
GraphqlTweets(app)

app.listen(PORT, () => {
	console.log(`The server is running in the port https://localhost:${PORT}`)
})

