const express = require('express')
const { join } = require('path')

const AppRouter = (app) => {
  const router = express.Router()
  app.use(express.static('public'))
  app.use(router)

  router.get('/', (req, res) => {

    // console.log("")
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'))
  })
}

module.exports = AppRouter

