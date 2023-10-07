import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <h2>Contacto</h2>
      <p>Correo Electrónico: <a href="mailto:jorgetoso@hotmail.com">jorgetoso@hotmail.com</a></p>
      <p>Teléfono: +543516207428</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jorgetoso/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jorgetoso/</a></p>
    </div>
  );
};

export default Contact;




