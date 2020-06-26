import styled from 'styled-components';

const getEmpty = ({placeholder}) => {
  if (placeholder === 'Required*') {
    return '&::placeholder {color: red;}';
  }
};

const getPopupStatus = ({popupStatus}) => {
  if (popupStatus === 'fail') return `
    visibility: visible;
    color: #dd2e2e;
  `;
   else if (popupStatus === 'success') return `
    visibility: visible; 
    color: #009701;
  `;
   else return `
    visibility: hidden
  `;
}

export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#73d6fd), color-stop(44%,#64a7ff), color-stop(100%, #73d6fd));
  margin-top: 120px;
  padding: 90px 40px 20px 40px;
`;

export const Title = styled.div`
  margin-top: 20px;
  font-size: 35px;
  font-weight: 500;
`;

export const PopupMessage = styled.div`
  margin: 4px 0 11px;
  ${getPopupStatus}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64vw;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled.input`
  height: 40px;
  width: 48.5%;
  margin: 10px 0;
  padding: 0 13px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Titillium Web';
  ${getEmpty};
`

export const MessageText = styled.textarea`
  height: 160px;
  width: 100%;
  margin: 10px;
  padding: 10px 13px 130px;
  border-radius: 5px;
  border-style: none;
  resize: none;
  box-shadow: 0 0 5px gray;
  word-wrap: break-word;
  overflow-y: hidden;
  font-size: 16px;
  font-family: 'Titillium Web';
  font-weight: 400;
  ${getEmpty};
`;

export const SubmitButton = styled.button`
  height: 40px;
  margin: 10px 10px 0;
  padding: 10px 30px 10px 30px;
  cursor: pointer;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  border-style: none;
  font-size: 14px;
  font-weight: 300;
  background-color: #eeeeee;
  color: #155ab4;

  &:hover {
    transform: scale(1.04);
  }
`;

export const NavButton = styled.div`
  margin: 20px 0 0;
  padding: 7px 19px 0;
  background-color: transparent;
  font-size: 2rem;
  color: white;
  border-radius: 50px;
  border-style: none;
  transition: transform 0.25s ease-out;

  &:hover {
    box-shadow: 0 0 5px gray;
    transform: scale(1.05)
  }
`;