import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Social from './Social';

interface Props {
  data: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    external_link: {
      image: string;
      url: string;
    }[];
  };
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }
`;

const StyledImage = styled.div`
  width: 100%;
  max-width: 400px;
  margin-right: 3.5rem;

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const DescriptionWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 3em;
  }

  h3 {
    margin: 0;
    margin-top: 0.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.text600};
  }

  p {
    line-height: 1.35rem;
    font-weight: 500;
  }

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    text-align: center;
    width: 90%;
    max-width: 700px;

    h1 {
      font-size: 2.7em;
    }

    h3 {
      font-size: 1.1em;
    }
  }
`;

const Project: React.FC<Props> = (props) => {
  const {
    data: { image, title, subtitle, description, external_link },
  } = props;

  return (
    <Wrapper>
      <StyledImage>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={400}
          height={300}
        />
      </StyledImage>

      <DescriptionWrapper>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <Social links={external_link} />
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Project;
