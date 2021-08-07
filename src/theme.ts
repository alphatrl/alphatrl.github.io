import { createGlobalStyle } from 'styled-components';

export const theme = {
  socialIconColor: '#5a5a5a',
  linkColor: '#0575f8',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
