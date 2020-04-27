import React from 'react';
import * as S from './skills.styles';

import SkillsList from './skills-data/skills-list';
import SkillCard from '../../components/skill-card/skill-card';


const Skills = ({refProp}) => {
  return (
    <S.SkillsPage ref={refProp}>
      <S.Title>MY SKILLS</S.Title>
      <S.Skills>
        {SkillsList.map(skill => 
          <SkillCard 
            key={skill.id}
            title={skill.title}
            description={skill.description}
            logo={skill.logo}
          />
        )}
      </S.Skills>
    </S.SkillsPage>
  );
};

export default Skills;