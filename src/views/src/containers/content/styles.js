import styled from 'styled-components'

export const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 52%;
  min-height: 82vh;
  height: auto;
  max-height: 82vh;
  padding: 12px;
  margin: 21px;
  background-color: #fff;
  box-shadow: 0 0 9px 6px rgba(0,0,0,.1); 
  border-radius: 12px;
  overflow-y: scroll;

  & h1 {
    font-size: 42px;
    font-weight: bold;
    margin: 6px 0;
    border-bottom: 3px solid var(--color-black);
  }
`