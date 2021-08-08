import React from 'react';
import styled from 'styled-components';

import Icon from '../../Icon';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 32px);
  grid-gap: 32px;
  margin-top: 54px;
  padding-bottom: 24px;

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    justify-content: center;
  }
`;

const StyledIcon = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.socialIconColor};

  :hover {
    color: ${(props) => props.theme.linkColor};
  }
`;

const Social: React.FC = () => {
  return (
    <Wrapper>
      <StyledIcon href="https://github.com/alphatrl" target="_blank">
        <Icon name="github" width={32} height={32} />
      </StyledIcon>
      <StyledIcon href="https://twitter.com/alphatrl" target="_blank">
        <Icon name="twitter" width={32} height={32} />
      </StyledIcon>
      <StyledIcon href="mailto:hello@amostan.me">
        <Icon name="email" width={32} height={32} />
      </StyledIcon>
    </Wrapper>
  );
};

export default Social;
