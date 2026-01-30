import React from 'react';
import styled from 'styled-components';

import Social from './components/Social';

const Wrapper = styled.div`
  height: calc(100vh / 5 * 4);
  min-height: 300px;
  background-color: #f0f0f0;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    height: calc(100vh / 4 * 3);
  }
`;

const Title = styled.div`
  height: 56px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.6em;
  }
`;

const Body = styled.div`
  height: calc(100% - 56px);
  width: 90%;
  max-width: 1100px;
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
    max-width: 500px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};

    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    width: 100%;
    text-align: center;

    p {
      max-width: unset;
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
          <p>
            I{"'"}m a software developer in Singapore. Currently I{"'"}m working
            at{' '}
            <a href="https://www.taskade.com" target="_blank" rel="noreferrer">
              Taskade
            </a>
            .
          </p>
        </Description>
        <Social />
      </Body>
    </Wrapper>
  );
};

export default Intro;
