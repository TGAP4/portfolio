import React from 'react';
import * as S from './header.styles';

import {jumpTo} from '../../utils/utils';


const Header = ({aboutRef, skillsRef, projectsRef, contactRef}) => {
  return (
    <S.Header>
      <S.NavButton onClick={jumpTo(aboutRef)}>About</S.NavButton>
      <S.NavButton onClick={jumpTo(skillsRef)}>Skills</S.NavButton>
      <S.NavButton onClick={jumpTo(projectsRef)}>Projects</S.NavButton>
      <S.NavButton onClick={jumpTo(contactRef)}>Contact</S.NavButton>
    </S.Header>
  );
};

export default Header;