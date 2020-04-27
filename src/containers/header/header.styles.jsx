import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #59d0ff;
  box-shadow: 3px 3px 6px #9e9e9e;
  padding: 5px 110px;
  position: fixed;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
`;

export const NavButton = styled.div`
  color: white;
  padding: 7px 30px;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.25s ease-out;

  &:hover {
    box-shadow: 0 0 4px gray;
    transform: scale(1.05)
  }
`;