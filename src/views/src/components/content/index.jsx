import React from 'react'
import { ContentWrapper } from './styles'

export const Content = ({title = 'Rules', description='Some content for the component'}) => (
  <ContentWrapper>
    <h2>
      { title }
    </h2>
    <p>
      {
        description
      }
    </p>
  </ContentWrapper>
)