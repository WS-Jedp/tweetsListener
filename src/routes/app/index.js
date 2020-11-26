const express = require('express')
const React = require('react')
const { Routes } = require('../../views/src/routes')
const { GlobalStyles } = require('../../views/src/styles/main')
const { join } = require('path')
const { renderToString } = require('react-dom/server')
const { ServerLocation } = require('@reach/router')

const setHtml = require('../../utils/setHtml')

const AppRouter = (app) => {
  const router = express.Router()

  const mainStylesRoute = 'assets/app.bundle.css'
  const mainBuild = 'assets/app.bundle.js'

  app.use(express.static('public'))
  app.use(router)

  const renderApp = (req, res, next) => {
    const markup = renderToString(
      <ServerLocation url={req.url}>
        <>
          <GlobalStyles />
          <Routes />
        </> 
      </ServerLocation>
    )

    res.send(setHtml(markup, mainBuild))
  }

  router.get('/', renderApp)
}

module.exports = AppRouter

