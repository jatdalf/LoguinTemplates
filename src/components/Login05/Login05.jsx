import React, { useState, useEffect } from 'react';
import style from './Login05.module.css';

const Login05 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Initialising the canvas
    var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Start the animation loop
    var intervalId = setInterval(draw, 33);

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

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
      <canvas className={style.canvas} />
      <div className={style.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label className={style.login5Label} htmlFor="username">User:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.login5Label} htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
           
          </div>
          <button className={style.login5Button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login05;