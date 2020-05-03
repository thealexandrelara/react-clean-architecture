import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background-color: #3f51b5;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    line-height: 26px;
    small {
      font-size: 18px;
    }
  }
  h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 50px;
  }
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
  }
  h3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }
  h4 {
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }
  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
  input, button {
  }
  button {
    cursor: pointer;
  }
`
