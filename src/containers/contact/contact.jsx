import React, {useState} from 'react';
import * as S from './contact.styles';

import {jumpTo} from '../../utils/utils.js';


const Contact = ({contactRef, landingRef}) => {
  const [name, setName] = useState({
    value: '',
    placeholder: 'Name'
  });
  const [email, setEmail] = useState({
    value: '',
    placeholder: 'Email'
  });
  const [message, setMessage] = useState({
    value: '',
    placeholder: 'Type your message here'
  });

  const initialPlaceholders = ['Name', 'Email', 'Message'];
  const inputData = [[name, setName], [email, setEmail], [message, setMessage]];

  const [popup, setPopup] = useState({
    message: '(placeholder text)',
    status: ''
  });


  const	handleChange = event => {
    const {id, value} = event.target;
    inputData[id][1]({...inputData[id][0], value: value});
  }


  const handleSubmit = event => {
    event.preventDefault();
    event.persist();
    let submitStatus = '';
    for (const data of inputData) {
      if (data[0].value === '') {
        data[1]({...data[0], placeholder: 'Required*'});
        submitStatus = 'fail';
        setPopup({
          message: 'Please fill out all fields before submitting.',
          status: 'fail'
        });
      }
    }

    if (submitStatus !== 'fail') {
      fetch('https://stormy-chamber-64963.herokuapp.com/submit', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify([name.value, email.value, message.value])
      }).catch(error => console.log(error));
      setPopup({
        message: 'Thank you for your message!  I will get back to you shortly.',
        status: 'success'
      });
      event.target.reset();
      for (const data of inputData) {
        data[1]({value: '', placeholder: initialPlaceholders[inputData.indexOf(data)]});
      }
    }
  };


  return (
    <S.ContactPage ref={contactRef}>
      <S.Title>CONTACT ME</S.Title>
      <S.PopupMessage popupStatus={popup.status}>
        {popup.message}
      </S.PopupMessage>
      <S.Form onSubmit={handleSubmit}>
        <S.Inputs>
          <S.Input 
            id='0' 
            type='text'
            value={name.value}
            placeholder={name.placeholder}
            onChange={handleChange} 
          />
          <S.Input 
            id='1'
            type='email' 
            value={email.value}
            placeholder={email.placeholder}
            onChange={handleChange} 
          />
        </S.Inputs>
        <S.MessageText
          id='2' 
          value={message.value}
          placeholder={message.placeholder} 
          onChange={handleChange} 
        />
        <S.SubmitButton type='submit'>Submit</S.SubmitButton>
        <S.NavButton onClick={jumpTo(landingRef)}>^</S.NavButton>
      </S.Form>
    </S.ContactPage>
  );
};

export default Contact;