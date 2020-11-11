import React from 'react'
import { TweetsWrapper } from './styles'

import { Dashboard } from '@layouts/dashboard'

import { Content } from '@containers/content'

import { Tweet } from '@components/tweet'
import { Content as ContentComponent } from '@components/content'

export const Tweets = () => {

  return (
    <Dashboard
      title="Tweets"
      description="Find the whole tweets that match with the rules that you configure!"
    >
      <Content title="Checkout your Tweets! :D">
        <ContentComponent 
          title="Congrats!"
          description="Perfect, here you will see all the tweets that match with your rules!"
        />
        <TweetsWrapper>
          <Tweet />
          <Tweet />
        </TweetsWrapper>
      </Content>
    </Dashboard>
  )
}