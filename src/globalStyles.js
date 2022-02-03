import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: 'Roboto Mono', monospace;
    color: white;
  }

  h1 {
      font-size: 3rem;
      font-weight: 100;
      margin: 0
  }

  h2 {
      font-size: 2.5rem;
      font-weight: 100;
      margin: 0
  }

  h3 {
      font-size: 2rem;
      font-weight: 100;
      margin: 0
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0
  }

`;
 
export default GlobalStyle;