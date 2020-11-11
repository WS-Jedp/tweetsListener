import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--color-main);
`

export const ImageWrapper = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100px;
  height: auto;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  & h1 {
    font-size: 21px;
  }

  & h3 {
    color: var(--color-gray);
    opacity: .8;
  }
`