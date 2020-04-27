import styled from 'styled-components';
import img from '../../data/images/background.jpg';


const getSize = ({size}) => {
  return `${size}rem`;
};

const getDelay = ({delay}) => {
  return `${delay}s`;
}



export const LandingScreen = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover ;

  @media (max-width: 535px) {
    display: flex;
    justify-content: center;
  }
`

export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 135px;

  @media (min-width: 535px) and (max-width: 1010px) {
    left: 113px
  }

  @media (min-width: 1010px) {
    right: 58vw;
  }
`;

export const LandingText = styled.h1`
  margin: 0 0 15px;
  padding-right: 1px;
  color: #0e2cd3;
  font-weight: 500;
  font-size: ${getSize};
  line-height: 1em;
  overflow: hidden;
  border-right: .07em solid transparent;
  white-space: nowrap;
  animation: 
    typing 2s steps(20, end) ${getDelay},
    blink-caret .75s step-end ${getDelay} 6,
    hide ${getDelay} step-end;

  @keyframes typing {
    from {width: 0}
    to {width: 100%}
  }

  @keyframes blink-caret {
    from, to {border-color: #0e2cd3}
    50% {border-color: transparent}
  }

  @keyframes hide {
    from {visibility: hidden}
    to {visibility: visible}
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
`