import React from 'react';
import LogoImg from "../../assets/OcasaLogoSmall.png"
import style from './Login08.module.scss';

const Login08 = () => {
  // Crea un array de 10 elementos vacíos
  const instances = Array.from({ length: 15 }, (_, index) => {
    // Genera un valor aleatorio para 'left' entre 0 y el ancho de la pantalla
    const randomLeft = `${Math.random() * 100}%`;

    return (
      <img
        key={index}
        src={LogoImg}
        className={style.instance}
        alt={`Instance ${index}`}
        style={{
          animationDelay: `${index * 1.5}s`, // Retardo de animación único para cada instancia
          left: randomLeft, // Establece la posición horizontal aleatoria
        }}
      />
    );
  });

  return (
    <div className={style.container}>
      {instances}
    </div>
  ); 
};

export default Login08;