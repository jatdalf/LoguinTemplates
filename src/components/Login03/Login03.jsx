import React, { useRef } from 'react'
import style from "./Login03.module.css"
import { carrouselData } from '../../assets/carrouselData';
import { useState } from 'react';
import { useEffect } from 'react';

const Loguin001 = () => {
  const imgRef = useRef();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  useEffect(() =>{
    const listNode = imgRef.current;
    const imageNode = listNode.querySelectorAll("li > img")[currentImgIndex]
    if (imageNode){
      imageNode.scrollIntoView({
        behavior: "smooth"
      })
    }
  },[currentImgIndex])

  const goToImg=(imgIdx) =>{setCurrentImgIndex(imgIdx)}
  

  return (
    <div className={style.mainContainer}>
      <div className={style.sliderContainer}>
        <div className={style.imagesContainer}>
          <ul ref={imgRef}>
            {
              carrouselData.map((image) =>{
                return <li key={image.id}>
                  <img src={image.imgUrl} className={style.imageCss} />
                </li>
              })
            }
          </ul>
        </div>
        <div className={style.dotsContainer}>
          {
            carrouselData.map((_, idx) =>(
              <div key={idx} className={style.dotCss}
                onClick={()=>goToImg(idx)}>&#9864;</div>
            ))            
          }
        </div>
      </div>
    </div>
  )
}

export default Loguin001