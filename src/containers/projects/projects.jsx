import React from 'react';
import * as S from './projects.styles';

import ProjectsList from './project-data/projects-list';
import ProjectCard from '../../components/project-card/project-card';


const Projects = ({refProp}) => {
  return (
    <S.ProjectsPage ref={refProp}>
      <S.Title>MY PROJECTS</S.Title>
      <S.Projects>
        {ProjectsList.reverse().map(project => 
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            thumbnail={project.thumbnail}
          />
        )}
      </S.Projects>
    </S.ProjectsPage>
  );
};

export default Projects;