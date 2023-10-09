import React, { useState } from 'react';
import style from './Login09.module.scss';

const Login09 = () => {

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
  <div className={style.boxBody}>
    <div className={style.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={style.userBox}>
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className={style.userBox}>
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  </div>
  ); 
};

export default Login09;