import styled from 'styled-components'

export const NavWrapper = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  align-items: ${props => props.row ? 'center' : 'flex-start'};
  justify-content: ${props => props.row ? 'center' : 'flex-start'};
  
  & ul {
    position: relative;
    width: 60%;
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    align-items: ${props => props.row ? 'center' : 'flex-start'};
    justify-content: ${props => props.row ? 'space-around' : 'flex-start'};

    & li {
      padding: ${props => props.row ? '12px' : '12px 0'};
    }
  }
`