import React, { useRef, useState, useEffect } from 'react';
import style from "./Login03.module.css";
import { carrouselData } from '../../assets/carrouselData';

const Login03 = () => {
  const imgRef = useRef();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const listNode = imgRef.current;
    const imageNode = listNode.querySelectorAll("li > img")[currentImgIndex];
    if (imageNode) {
      imageNode.scrollIntoView({
        behavior: "smooth"
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
              className={`${style.dotCss} ${idx === currentImgIndex ? style.active : ""}`}
              onClick={() => goToImg(idx)}            >
              &#9864;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login03;