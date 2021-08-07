import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';

const Wrapper = styled.div`
  margin: 0 auto;
`;

interface Props {
  title?: string;
}

const DefaultLayout: React.FC<Props> = (props) => {
  const { title = 'Amos Tan', children } = props;

  return (
    <Wrapper>
      <SEO title={title} />
      <main>{children}</main>
    </Wrapper>
  );
};

export default DefaultLayout;
