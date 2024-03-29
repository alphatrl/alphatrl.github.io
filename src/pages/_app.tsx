import '../styles.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
