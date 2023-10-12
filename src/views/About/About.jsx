import React from 'react';
import style from './About.module.css';
import mypic1 from '../../assets/MyPic1.jpg';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h1 className={style.aboutH1}>Hi!, I am</h1>
        <h1 className={style.myName}>Jorge</h1>
        <img src={mypic1} className={style.pic1} alt="Jorge's picture" />
        <p className={style.aboutP1}>Scroll through your area of interest to learn more about me</p>
      </div>
    </div>
  );
};

export default About;