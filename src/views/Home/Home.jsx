//import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./Home.module.css"
import backgroundImage from "../../Assets/starsBG.png"
import React from 'react'

const Home = () => {
  return (
    <div className={style.HomeBg} >
      <img src={backgroundImage} className={style.stretch} alt="starsBackground" />
    </div>  
  )
}

export default Home