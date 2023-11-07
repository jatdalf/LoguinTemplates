import React from 'react';
import style from './Contact.module.css';
import Whatsapp from '../../components/Whatsapp/Whatsapp'
import scLogo from '../../assets/LogoSc2.svg';

const Contact = () => {
  return (
    <div>
      <div className={style.contact}>
        <h2 className={style.contactH2}>Contact</h2>
        <p>E-mail: <a href="mailto:jorgetoso@hotmail.com">jorgetoso@hotmail.com</a></p>
        <p>Telephone number: +543516207428</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jorgetoso/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jorgetoso/</a></p>
      </div>
      <div className={style.svgContainer}>
        <Whatsapp />
        <img src={scLogo} className={style.svg}></img>
       
      </div>
    </div>
  );
};

export default Contact;




