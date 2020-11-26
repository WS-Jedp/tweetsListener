import React from 'react'
import { Link } from '@reach/router'

import { HomeWrapper } from './styles'

import { Header } from '../../components/header'
import { Nav } from '../../components/nav'
import { Footer } from '../../components/footer'

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <p>
        Welcome to Tweets Listener, a small project that will help you to find tweets about some topic that you want to search. The first you want to do is config your rules to start looking for your tweets!
      </p>
      <Link className="button button-main" to="/rules">Get Started</Link>
      <Nav row/>
      <Footer />
    </HomeWrapper>
  )
}