const express = require('express')

const AppRouter = (app) => {
  const router = express.Router()
  app.use(router)

  router.get('/', (req, res) => {

    // console.log("")
    res.send("Hello world")
  })
}

module.exports = AppRouter

