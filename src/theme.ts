import { createGlobalStyle } from 'styled-components';

export const theme = {
  textColor: '#111111',
  socialIconColor: '#5a5a5a',
  linkColor: '#0575f8',

  text600: '#666666',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    color: #111111;

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
