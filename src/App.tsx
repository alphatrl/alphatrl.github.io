import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Introduction from './components/Introduction';
import Projects from './components/Projects';
import DefaultLayout from './layout/DefaultLayout';
import { theme } from './theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout title="Portfolio">
        <Wrapper>
          <Introduction />
          <Projects />
        </Wrapper>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default App;
