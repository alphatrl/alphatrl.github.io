import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
