import React from 'react';
import * as S from './skill-card.styles';


const SkillCard = ({title, description, logo}) => {
  return (
    <S.SkillCard>
      <S.Logo src={logo} alt='Skill Logo' />
      <div>
        <S.Title>{title}</S.Title>
        <span>{description}</span>
      </div>
    </S.SkillCard>
  );
};

export default SkillCard;