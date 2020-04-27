import styled from 'styled-components';

export const ProjectsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 95px;
`;

export const Title = styled.div`
  color: black;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
`;

export const Projects = styled.div`
  display: grid;
  gap: 2px;
  margin: 0 6vw;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr
  }
`;