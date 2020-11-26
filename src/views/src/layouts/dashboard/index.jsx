import React from 'react'
import { DashboardWrapper } from './styles'

import { Menu } from '../../containers/menu'


export const Dashboard = ({children, title, description}) => (
  <DashboardWrapper>
      <Menu 
        title={title}
        description={description}
      />
      {
        children
      }
  </DashboardWrapper>
)