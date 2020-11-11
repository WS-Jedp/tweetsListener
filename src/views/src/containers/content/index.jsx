import React from 'react'

import { ContentWrapper } from './styles'

export const Content = ({title, children}) => {
  return (
    <ContentWrapper>
      <h1>
        {
          title || "Title of the Container"
        }
      </h1>
      {
        children
      }
    </ContentWrapper>
  )
}