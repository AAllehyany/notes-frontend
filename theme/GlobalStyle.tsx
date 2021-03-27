import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  div, form, input, h1, span, button, a {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;