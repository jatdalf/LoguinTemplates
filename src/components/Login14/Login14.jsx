import React, { useState } from 'react';
import LogoImg from "../../assets/OcasaLogoSmall.png"
import style from './Login14.module.scss';

const Login14 = () => {
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
            animationDelay: `${index * 0.1}s`, // Retardo de animación único para cada instancia
            left: randomLeft, // Establece la posición horizontal aleatoria
            }} />
        );
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica de inicio de sesión con el username y la contraseña
      console.log('Usuario:', username);
      console.log('Contraseña:', password);
      // Luego, puedes enviar estos datos al servidor o realizar cualquier acción necesaria
    };

  return (
    <div className={style.container}>
      {instances}
      <div className={style.loginContainer}>
      <div className={style.formContainer}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
     </div>
    </div>    
  ); 
};

export default Login14;