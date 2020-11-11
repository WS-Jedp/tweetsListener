import React from 'react'
import { Link } from '@reach/router'

import { NavWrapper } from './styles'

export const Nav = ({row}) => (
  <NavWrapper row={row}>
    <ul>
      <li>
        <Link to='/rules'>Rules</Link>
      </li>
      <li>
        <Link to='/tweets'>Tweets</Link>
      </li>
      <li>
        <Link to='/rules'>API Rest</Link>
      </li>
      <li>
        <Link to='/rules'>GraphQl</Link>
      </li>
    </ul>
  </NavWrapper>
)