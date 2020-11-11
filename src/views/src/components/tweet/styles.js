import styled from 'styled-components'

export const TweetWrapper = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  padding: 12px;
  width: 100%;
  min-height: 90px;
  border-top: 1px solid rgba(0,0,0,.3);
  border-bottom: 1px solid rgba(0,0,0,.3);
`

export const HeaderTweet = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap; 
  align-items: center;
  justify-content: flex-start;
  margin: 6px;

  & figure {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin-right: 6px;
    border-radius: 50%;
    border: .6px solid rgba(0,0,0,.6);
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const UserTweet = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  & strong {
    font-weight: bold;
    letter-spacing: .9;
  }

  & p {
    font-weight: 400;
    opacity: .9;
    font-size: 15px;
  }
`

export const TweetData = styled.p`
  width: 100%;
  height: auto;
  font-weight: 400;
  letter-spacing: .9;
  opacity: .9;
`