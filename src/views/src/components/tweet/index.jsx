import React from 'react'
import { HeaderTweet, TweetData, TweetWrapper, UserTweet } from './styles'

export const Tweet = ({person, username, avatar, data}) => (
  <TweetWrapper>
    <HeaderTweet>
      <figure>
        <img src={avatar} alt={username}/>
      </figure>
      <UserTweet>
        <strong>
          {
            person || 'Juan Esteban'
          }
        </strong>
        <p>
          {
            username || '@Jedp'
          }
        </p>
      </UserTweet>
    </HeaderTweet>

    <TweetData>
      {
        data || 'Text that must be replaced by the data of the tweet'
      }
    </TweetData>
  </TweetWrapper>
)
