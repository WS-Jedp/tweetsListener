import React from 'react'
import { Link } from '@reach/router'
import { HeaderWrapper, ImageWrapper, TitleWrapper } from './styles'

// import TwitterLogo from '../../assets/images/Twitter_Logo_Blue.svg'

export const HeaderSm = () => (
  <HeaderWrapper>
    <ImageWrapper>
      <Link to='/'>
        {/* <img src={TwitterLogo} alt="Twitter Logo"/> */}
      </Link>
    </ImageWrapper>
    <TitleWrapper>
      <h1>
        Tweets Listener
      </h1>
      <h3>
        Version 1.0
      </h3>
    </TitleWrapper>
  </HeaderWrapper>
)