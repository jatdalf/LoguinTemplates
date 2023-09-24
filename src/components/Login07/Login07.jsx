import React, { useState } from 'react';
import style from './Login07.module.css';
import bgImage from '../../assets/wallBg.jpg';

const Login07 = () => {
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
    <div className={style.NeonBody}>
      <img src={bgImage} alt="Fondo de ladrillos oscuros" />
      <div className={style.loginContainer}>
        <div className={style.logo}>
          <b>W<span>el</span>c<span>om</span>e</b>
        </div>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
      </div>
    </div>
  );
};

export default Login07;