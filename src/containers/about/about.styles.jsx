import styled from 'styled-components';

export const AboutPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 95px 10vw 20px;
  margin-top: 40px;

  @media (max-width: 1000px) {
    padding: 95px 15vw 20px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#7ddaff), color-stop(44%,#64a7ff), color-stop(100%, #7ddaff));
  padding: 60px 7vw;

  @media (max-width: 1000px) {
    padding: 60px 10vw 50px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BioImage = styled.img`
  width: 250px;
  margin: 5px 5vw 0 0;
  box-shadow: 0 0 10px #333dc9;
  border-radius: 5px;

  @media (max-width: 1000px) {
    margin: 10px 0 40px;
  }
`;

export const BioText = styled.p`
  margin: 0;
  text-indent: 35px;
`;