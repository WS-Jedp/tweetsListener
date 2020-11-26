import React from 'react'
import ReactDOM from 'react-dom'

import { Routes } from './src/routes'

import { GlobalStyles } from './src/styles/main'
// 
ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>, window.document.getElementById('root')
)
