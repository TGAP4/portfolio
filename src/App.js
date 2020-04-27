import React, {useRef} from 'react';
import * as S from './App.styles'

import Header from './containers/header/header';
import LandingScreen from './containers/landing-screen/landing-screen';
import About from './containers/about/about';
import Skills from './containers/skills/skills';
import Projects from './containers/projects/projects';
import Contact from './containers/contact/contact';


const App = () => {
  const refProps = {
    landingRef: useRef(null),
    aboutRef: useRef(null),
    skillsRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null)
  };
  const {landingRef, aboutRef, skillsRef, projectsRef, contactRef} = refProps;

  return (
    <S.App>
      <Header {...refProps} />
      <LandingScreen refProp={landingRef} />
      <About refProp={aboutRef} />
      <Skills refProp={skillsRef} />
      <Projects refProp={projectsRef} />
      <Contact {...refProps} />
    </S.App>
  );
};

export default App;
