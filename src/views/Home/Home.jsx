import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./Home.module.css"
import React from 'react'

const Home = () => {
  return (
    <div className={style.loginContainer}>
      <div className={style.auroraBorealis}/>
      <CardContainer></CardContainer>
    </div>
  )
}

export default Home