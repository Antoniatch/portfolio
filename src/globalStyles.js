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
      font-weight: 500;
      margin: 0
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0
  }

  .fade {
    display: flex;
    right: 9rem;
    top: 6rem;
    color: white;
    font-size: 1.2rem;
    width: 100%;
    position: absolute;
    top: 3rem;
    right: 0%;

    transition: all 1.5s;
    
    ul {
        list-style: none;
    }

    li {
        padding: .6rem 2rem;
        width: 100%;
        color: #7bdcb5;
        font-weight: 600;
        margin: .5rem 0;
        border : solid white 2px;
        background-color: black;
        opacity: 90%;

        :hover {
            background-color: white;
            color: black
        }
    }
  }

  .fade.out {
    opacity: 0;
    transform: translateX(-600px);
  }

`;
 
export default GlobalStyle;