import React from 'react'
import { FeatureWrapper, RuleWrapper } from './styles'

export const Rule = ({tag, id}) => {

  return (
    <RuleWrapper>
      <FeatureWrapper>
        <h4>Tag:</h4>
        <p>
          {
            tag || 'Some tag of Rule'
          }
        </p>
      </FeatureWrapper>
      <FeatureWrapper>
        <h4>ID:</h4>
        <p>
          {
            id || '435453189'
          }
        </p>
      </FeatureWrapper>
    </RuleWrapper>
  )
}