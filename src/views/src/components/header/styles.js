import styled from 'styled-components'

export const HeaderWrapper = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  & h1 {
    padding: 9px;
    font-size: 60px;
    font-weight: 900;
  }
`

export const HeaderImage = styled.figure`
  width: 24%;
  height: auto;
  display: flex;
  margin: 12px;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
