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
      <img className={style.neonImg} src={bgImage} alt="Fondo de ladrillos oscuros" />
      <div className={style.loginContainer}>
        <div className={style.logo}>
          <b>W<span>el</span>c<span>om</span>e</b>
        </div>
            <form onSubmit={handleSubmit}>
                <div className={style.neonImput}>
                    <label htmlFor="username">USERNAME:</label>
                    <input className={style.neonImputText}
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className={style.neonImput2}>
                    <label htmlFor="password">Password:</label>
                    <input className={style.neonImputText}
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className={style.neonSubmit} type="submit">Submit</button>
            </form>
      </div>
    </div>
  );
};

export default Login07;