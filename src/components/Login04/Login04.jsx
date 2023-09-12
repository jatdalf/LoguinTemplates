import React, { useState } from 'react';
import style from './Login04.module.css';
import backgroundVideo from '../../assets/wh.mp4'; // Importa el video (asegúrate de tener el archivo 'video.mp4' en la misma ubicación que este archivo)

const Login04 = () => {
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
    <div className={style.loginContainer}>
      <div className={style.videoContainer}>
        <video autoPlay muted loop className={style.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta videos en formato MP4.
        </video>
      </div>
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
  );
};

export default Login04;