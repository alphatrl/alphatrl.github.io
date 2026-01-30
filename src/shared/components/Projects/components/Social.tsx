import React from 'react';
import styled from 'styled-components';

import Icon from '../../Icon';

interface Props {
  links: {
    image: string;
    url: string;
  }[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 32px);
  grid-gap: 16px;

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

const Social: React.FC<Props> = (props) => {
  const { links } = props;

  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <StyledIcon key={link.image} href={link.url} target="_blank">
            <Icon name={link.image} width={32} height={32} />
          </StyledIcon>
        );
      })}
    </Wrapper>
  );
};

export default Social;
