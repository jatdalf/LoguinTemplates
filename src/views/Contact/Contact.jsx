import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <h2>Contact</h2>
      <p>E-mail: <a href="mailto:jorgetoso@hotmail.com">jorgetoso@hotmail.com</a></p>
      <p>Telephone number: +543516207428</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jorgetoso/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jorgetoso/</a></p>
    </div>
  );
};

export default Contact;




