import React from 'react'
import { MenuWrapper, FooterWrapper } from './styles'

import { HeaderSm } from '../../components/headerSm'
import { Content } from '../../components/Content'
import { Nav } from '../../components/nav'
import { Footer } from '../../components/footer'

export const Menu = ({title, description}) => {

  return (
    <MenuWrapper>
      <HeaderSm />
      <Content 
        title={title || 'rules'}
        description={description || 'Some information for the menu container.'}
      />
      <Nav />
      <FooterWrapper>
        <Footer />
      </FooterWrapper> 
    </MenuWrapper>
  )
} 