import React, { useRef, useState, useEffect } from 'react';
import style from './Login03.module.css';
//import { carrouselData } from '../../assets/carrouselData';

const Login03 = () => {
  const carrouselData = [
    {id: 1, imgUrl: "https://static.wixstatic.com/media/400291_51d1218e2e8545f59d0c267d75336d01~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_51d1218e2e8545f59d0c267d75336d01~mv2.jpg"},
    {id: 2, imgUrl: "https://static.wixstatic.com/media/400291_38d95df91fb84781876d283fe938ed44~mv2.jpg/v1/fill/w_1024,h_512,al_c,q_85,enc_auto/400291_38d95df91fb84781876d283fe938ed44~mv2.jpg"},
    {id: 3, imgUrl: "https://static.wixstatic.com/media/400291_9762f44b737041739268c573e018de9d~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_9762f44b737041739268c573e018de9d~mv2.jpg"},
    {id: 4, imgUrl: "https://static.wixstatic.com/media/400291_f573080d71fd40258320f2bb429b060a~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_f573080d71fd40258320f2bb429b060a~mv2.jpg"},
    {id: 5, imgUrl: "https://static.wixstatic.com/media/400291_9539cf4aae394ff8a7adf60528e661eb~mv2.jpg/v1/fill/w_1024,h_512,al_c,q_85,enc_auto/400291_9539cf4aae394ff8a7adf60528e661eb~mv2.jpg"}
  ]
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

  // Función para avanzar automáticamente las imágenes cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calcular el próximo índice de imagen
      const nextIndex = (currentImgIndex + 1) % carrouselData.length;
      setCurrentImgIndex(nextIndex);
    }, 3000); // Intervalo de 3000 milisegundos (3 segundos)

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