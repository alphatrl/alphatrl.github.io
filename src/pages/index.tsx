import React from 'react';
import styled from 'styled-components';

import Introduction from '../components/Introduction';
import DefaultLayout from '../layout/DefaultLayout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <DefaultLayout title="Portfolio">
      <Wrapper>
        <Introduction />
      </Wrapper>
    </DefaultLayout>
  );
};

export default Home;
