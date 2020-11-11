import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-main: #1D9BF0;
    --color-main-light: #1DA1F2;
    --color-black: #14171A;
    --color-gray: #434548;
    --color-white: #F8F8F8;
  }
  
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
    text-decoration: none;
    list-style: none;
    color: var(--color-black);
    background-color: var(---color-white);
  }

  body {
    min-height: 100vh;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .button {
    display: inline-block;
    padding: 12px 42px;
    margin: 9px 0;
    width: auto;
    max-width: 200px;
    border-radius: 30px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,.1); 
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 900;
    letter-spacing: .9px;
    transition: .3s ease-in-out;

    &:hover {
      color: var(--color-white) !important;
      opacity: .8;
      box-shadow: 0 0 12px 3px rgba(0,0,0,.3);
    }
  }

  .button-main {
    background-color: var(--color-main);
    color: var(--color-white);
  }

  .button-delete {
    background-color: #F21D1D;
    color: var(--color-white);
  }

  a {
    transition: .3s ease-in-out;
    &:hover {
      color: var(--color-main);
    }
  }

  input[type="text"], input[type="number"] {
    position: relative;
    padding: 6px 9px;
    color: rgba(0,0,0,0.8);
    border: 2px solid var(--color-gray);
    border-radius: 9px;
  }

  /* Scroll */
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 12px;
}
::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 12px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.4);
  border-radius: 12px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.6);
}
`