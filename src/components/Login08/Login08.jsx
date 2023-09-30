import React, { useEffect } from 'react';
import style from './Login08.module.scss';

const Login08 = () => {
  useEffect(() => {
    const numInstances = 10; // Número de instancias del SVG que deseas mostrar
    const container = document.querySelector(`.${style.svgWrap}`);

    // Crear y agregar instancias adicionales del SVG
    for (let i = 0; i < numInstances; i++) {
      const svgInstance = document.createElement('div');
      svgInstance.className = style.svgInstance;

      const svgClone = document.querySelector(`.${style.svgSvg}`).cloneNode(true);
      svgInstance.appendChild(svgClone);

      container.appendChild(svgInstance);

      // Asignar animaciones aleatorias a cada instancia
      const rotationDuration = Math.random() * 10 + 5; // Duración de la rotación en segundos
      const rotationDelay = Math.random() * 5; // Retraso inicial de la rotación en segundos
      const translateY = Math.random() * 100 + 50; // Distancia de elevación en píxeles
      const translateYDuration = Math.random() * 10 + 5; // Duración de la elevación en segundos
      const translateYDelay = Math.random() * 5; // Retraso inicial de la elevación en segundos

      svgInstance.style.animation = `rotate ${rotationDuration}s linear ${rotationDelay}s infinite, translateY ${translateYDuration}s ease-out ${translateYDelay}s forwards`;

      container.appendChild(svgInstance);
    }
  }, []);

  return (
    <div className={style.svgWrap}>
      <svg className={style.svgSvg} xmlns="http://www.w3.org/2000/svg" viewBox="-100 150 700 500">
        <g transform="matrix(.950599 0 0 0.942822 14.742293 17.355778)">
            <g transform="matrix(.69463-.719367 0.719367 0.69463-199.02287 268.388303)">
            <rect width="286.007807" height="36.964497" rx="0" ry="0" transform="matrix(.607912 0 0 1 205.350604 290.386227)" fill="#0dd5c6" stroke-width="0"/>
            <rect width="286.006129" height="36.818897" rx="0" ry="0" transform="matrix(.331142-.322897 0.698137 0.715964 277.40644 375.381676)" fill="#0dd5c6" stroke-width="0"/>
            <rect width="286.01521" height="37.122594" rx="0" ry="0" transform="matrix(.318147 0.331181-.721156 0.692773 306.795153 214.638918)" fill="#0dd5c6" stroke-width="0"/>
            </g>    
        </g>
      </svg>
    </div>
  );
};

export default Login08;