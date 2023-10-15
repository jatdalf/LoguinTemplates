import React from 'react';
import style from './About.module.css';
import mypic1 from '../../assets/MyPic1.jpg';
import developerPic from '../../assets/webDevelopment.jpg'

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h1 className={style.aboutH1}>Hi!, I am</h1>
        <h1 className={style.myName}>Jorge</h1>
        <img src={mypic1} className={style.pic1} alt="Jorge's picture" />
        
        <p className={style.aboutP1}>A full stack developer passionate about technology</p>
        <p className={style.aboutP}>Scroll through your area of interest to learn more about me</p>
      </div>
      <div className={style.banner}>
        <div className={style.bannerItem}>          
          <p className={style.bannerTitle}>Dev Skills</p>
          <p className={style.bannerP1}>Full Stack Developer<br/> 
                                        with skills in React, Javascript, Css<br/>
                                        </p>
        </div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Studies</p></div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Languages</p></div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Job history</p></div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Hobbies</p></div>
      </div>
    </div>
  );
};

export default About;