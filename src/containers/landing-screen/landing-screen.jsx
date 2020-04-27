import React from 'react';
import * as S from './landing-screen.styles';


const LandingScreen = ({refProp}) => {
  return (
    <S.LandingScreen ref={refProp}>
      <S.TextGroup>
        <S.LandingText size={3.1} delay={0}>
          Hi, I'm Andrew
        </S.LandingText>
        <S.Subtitle>
          <S.LandingText size={1.3} delay={4.4}>
            I'm a full-stack developer
          </S.LandingText>
        </S.Subtitle>       
      </S.TextGroup>
    </S.LandingScreen>
  );
};

export default LandingScreen;