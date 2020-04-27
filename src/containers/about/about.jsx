import React from 'react';
import * as S from './about.styles';

import Img from '../../data-files/images/bio.jpg';
import Text from '../../data-files/texts/about-bio.js';


const About = ({refProp}) => {
  return (
    <S.AboutPage ref={refProp}>
      <S.AboutContainer>
        <S.Title>ABOUT ME</S.Title>
        <S.Content>
          <S.BioImage src={Img} alt='Me' />
          <S.BioText>{Text}</S.BioText>
        </S.Content>
      </S.AboutContainer>
    </S.AboutPage>
  );
};

export default About;