import React, { useState, useEffect } from 'react';
import style from './Login06.module.css';

const Login06 = () => {
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

    return(
    <div  className={style.body}>
        <div className={style.overlay}>
            <h1>WELCOME</h1>
        </div>

        <div className={style.futureLoginForm}>
            <form onSubmit={handleSubmit}>
            <h2 className={style.futureH2}>Log in</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div>

        <div className={style.hey}>
        <div className={style.layerUp}/>
        </div>
        <div className={style.layer0}>
            <div className={style.layer1}>
                <div className={style.layer2}>
                    <div className={style.lines}>
                        <div className={style.layerCorner}></div>                            
                    </div>
                </div>
            </div>
        </div>
        <div className={style.mtn}/>
    </div>
    )
}

export default Login06;