import React from 'react';
import styled from 'styled-components';

import { PROJECT_DATA } from '../data';
import Project from './Project';

const Wrapper = styled.div`
  margin-top: 32px;
`;

const ProjectList: React.FC = () => {
  return (
    <Wrapper>
      {PROJECT_DATA.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </Wrapper>
  );
};

export default ProjectList;
