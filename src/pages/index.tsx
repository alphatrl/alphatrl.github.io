import React from 'react';
import styled from 'styled-components';

import DefaultLayout from '../layout/DefaultLayout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <DefaultLayout title="Portfolio">
      <Wrapper>
        <h1>Hey! 👋</h1>
        <h2>
          I am a software developer in Singapore. Currently working at{' '}
          <a href="">Taskade</a>
        </h2>
      </Wrapper>
    </DefaultLayout>
  );
};

export default Home;
