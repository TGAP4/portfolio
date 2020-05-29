import React from 'react';
import * as S from './project-card.styles';


const ProjectCard = ({title, description, repoLink, liveLink, thumbnail}) => {
  return (
    <S.ProjectCard>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <div>{description}</div>
        <S.Links>
          <S.ProjectLink 
            className='link' 
            href={repoLink} 
            target='_blank' 
            rel='noopener noreferrer'
          >
            GitHub
          </S.ProjectLink>
          {liveLink ?
            <S.ProjectLink 
              className='link' 
              href={liveLink} 
              target='_blank' 
              rel='noopener noreferrer'
            >
              See Live
            </S.ProjectLink>
          : null}
        </S.Links>
      </S.TextContent>
      <S.Thumbnail img={thumbnail} />
    </S.ProjectCard>
  );
};

export default ProjectCard; 