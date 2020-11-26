import React from 'react'
import { HeaderWrapper, HeaderImage } from './styles'

// import TwitterLogo from '../../assets/images/Twitter_Social_Icon_Circle_Color.svg'

export const Header = () => {

  return ( 
    <HeaderWrapper>
      <HeaderImage>
        {/* <img src={TwitterLogo} alt="Twitter logo" /> */}
      </HeaderImage>
      <h1>Tweets Listener</h1>
     
    </HeaderWrapper>
  )
}