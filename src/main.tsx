import './styles.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage';
import { theme } from './theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
);
