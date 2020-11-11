import React from 'react'
import { Router } from '@reach/router'

import { Home } from '@pages/home'
import { Rules } from '@pages/rules'
import { Tweets } from '@pages/tweets'

export const Routes = () => (
  <Router>
    <Home path='/' />
    <Rules path='/rules' />
    <Tweets path='/tweets' />
  </Router>
)