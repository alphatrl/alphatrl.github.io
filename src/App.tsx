import React from 'react';
import { ThemeProvider } from 'styled-components';

import Introduction from './components/Introduction';
import Projects from './components/Projects';
import DefaultLayout from './layout/DefaultLayout';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout title="Portfolio">
        <div className="flex flex-col">
          <Introduction />
          <Projects />
        </div>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default App;
