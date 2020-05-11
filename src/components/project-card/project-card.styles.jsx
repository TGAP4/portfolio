import styled from 'styled-components';

const getImg = ({img}) => {
  return img;
}

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  color: black;
  margin: 5px;
  padding: 15px 15px 12px 15px;
  font-size: .75rem;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 1.02rem;
  box-shadow: 0 0 5px gray;
  border-style: solid;
  border-width: 1px;
  position: relative;
`;

export const TextContent = styled.div`
  margin-right: 10px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

export const Thumbnail = styled.div`
  width: 200px;
  height: 140px;
  background-image: url(${getImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 12px;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: #155ab4;
  border-style: solid;
  border-width: 2px;
  padding: 2px 6px;
  margin-right: 10px;
`;