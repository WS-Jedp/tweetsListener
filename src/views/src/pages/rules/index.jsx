import React from 'react'
import { RulesWrapper, FormInputs } from './styles'

import { Dashboard } from '@layouts/dashboard'

import { Content } from '@containers/content'

import { Rule } from '@components/rule'
import { Input } from '@components/input'
import { Content as ContentComponent} from '@components/content'

export const Rules = () => {
  return (
    <Dashboard
      title="Rules"
      description="Configure all the features that you want to be displayed when we find the tweets that you need!"
    >
      <Content title="Configure your rules!">
        <ContentComponent 
          title="Current Rules!"
          description="Find the whole rules that you we have configured for match the tweets!"
        />

        <RulesWrapper>
          <Rule />
        </RulesWrapper>

        <FormInputs>
          <ContentComponent 
            title="Add A Rule"
            description="Create a new rule for get new tweets in your search!"
          />
          <Input 
            title="Tag:"
            description="Define a rememberable name for your rule"
            placeholder="Create the tag of your rule"
          />
          <Input 
            title="Value:"
            description="Write the values that you want to make match with"
            placeholder="Define the new values of your rule"
          />

          <button type="submit" className="button button-main">Create!</button>
        </FormInputs>
        
        <FormInputs>
          <ContentComponent 
            title="Delete A Rule"
            description="Delete a existing rule to modify the search of tweets!"
          />
          <Input 
            title="ID:"
            description="Specify the ID of the rule that you want to delte"
            placeholder="Write the ID of the rule"
          />
          <button type="submit" className="button button-delete">Delete!</button>
        </FormInputs>
      </Content>
    </Dashboard> 
  )
}
