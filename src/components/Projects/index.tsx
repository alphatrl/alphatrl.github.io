import React from 'react';
import styled from 'styled-components';

import ProjectList from './components/ProjectList';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
`;

const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0;
    font-size: 1.2em;
    text-decoration: none;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
  }
`;

const Projects: React.FC = () => {
  return (
    <Wrapper id="projects">
      <Header>
        <a href="#projects">My Projects</a>
      </Header>
      <ProjectList />
    </Wrapper>
  );
};

export default Projects;
