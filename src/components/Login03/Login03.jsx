import React, { useRef, useState, useEffect } from 'react';
import style from './Login03.module.css';
import { carrouselData } from '../../assets/carrouselData';

const Login03 = () => {
  const imgRef = useRef();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const listNode = imgRef.current;
    const imageNode = listNode.querySelectorAll('li > img')[currentImgIndex];
    if (imageNode) {
      imageNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [currentImgIndex]);

  const goToImg = (imgIdx) => {
    setCurrentImgIndex(imgIdx);
  };

  // Función para avanzar automáticamente las imágenes cada 2 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calcular el próximo índice de imagen
      const nextIndex = (currentImgIndex + 1) % carrouselData.length;
      setCurrentImgIndex(nextIndex);
    }, 2000); // Intervalo de 2000 milisegundos (2 segundos)

    return () => {
      // Limpiar el intervalo cuando el componente se desmonte
      clearInterval(intervalId);
    };
  }, [currentImgIndex]);

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
    <div className={style.mainContainer}>
      <div className={style.sliderContainer}>
        <div className={style.imagesContainer}>
          <ul ref={imgRef}>
            {carrouselData.map((image) => (
              <li key={image.id}>
                <img src={image.imgUrl} className={style.imageCss} alt="Carousel Image" />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.dotsContainer}>
          {carrouselData.map((_, idx) => (
            <div
              key={idx}
              className={`${style.dotCss} ${idx === currentImgIndex ? style.active : ''}`}
              onClick={() => goToImg(idx)}
            >
              &#9864;
            </div>
          ))}
        </div>
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login03