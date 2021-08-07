import React from 'react';
import styled from 'styled-components';

import Social from './components/Social';

const Wrapper = styled.div`
  height: calc(100vh / 5 * 3);
  background-color: #f0f0f0;
  padding: 0 10%;
  padding-bottom: 32px;

  h1 {
    margin: 12px 0;
    font-size: 3.2rem;
  }

  h2 {
    margin: 12px 0;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const Title = styled.div`
  height: 56px;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.4rem;
  }
`;

const Body = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.div`
  h1 {
    margin: 12px 0;
    font-size: 3.2rem;
    font-weight: 600;
  }

  p {
    margin: 4px 0;
    font-size: 1.8rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};

    :hover {
      text-decoration: underline;
    }
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <h1>Amos Tan</h1>
      </Title>
      <Body>
        <Description>
          <h1>Hey! 👋</h1>
          <p>I am a software developer in Singapore.</p>
          <p>
            I am currently working at{' '}
            <a href="https://www.taskade.com">Taskade</a>.
          </p>
        </Description>
        <Social />
      </Body>
    </Wrapper>
  );
};

export default Intro;
