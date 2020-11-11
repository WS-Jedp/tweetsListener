import styled from 'styled-components'

export const RuleWrapper = styled.article`
  display: inline-flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 210px;
  width: auto;
  height: 72px;
  padding: 6px;
  border-radius: 9px;
  box-shadow: 0 0 9px 1px rgba(0,0,0,.09);
`

export const FeatureWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 3px;

  & h4 {
    display: inline;
    font-weight: bold;
    margin-right: 3px;
  }

  & p {
    display: inline;
    font-weight: 300;
    opacity: .8;
  }
`
