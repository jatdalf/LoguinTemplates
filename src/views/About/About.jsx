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
          <p className={style.bannerP1}><br/><br/><br/>Full Stack Web Developer<br/> 
                                        with skills in React, Javascript, Css<br/>
                                        Express, Sequelize, NodeJS, PostgreSql<br/>
                                        BootsTrap/Chakra, Github, VueJs  <br/>
                                        React Native.
                                        </p>
        </div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Studies</p>
          <p className={style.bannerP1}>Full Stack Developer<br/> 
                                      "Soy Henry" Bootcamp.<br/> 700 hours of study<br/> 
                                      theory, individual and group practice <br/><br/>
                                      Computer systems analyst<br/>
                                      IES21ST Century University<br/>
                                      Desktop and web App dev<br /><br />
                                      Virtual Simulations and Videogames<br />
                                      IES21ST Century University<br/>
                                      </p>
        </div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Languages</p>
        <p className={style.bannerP1}><br/><br/>English<br/> 
                                      C2 Proficent Efset Certificate<br/><br/> 
                                      Portuguese<br/>
                                      Basic, 1 year training<br/><br/>
                                      Spanish<br/>
                                      Native language<br />                                      
                                      </p>
        </div>
        <div className={style.bannerItem}><p className={style.bannerTitle}>Experience</p>
        <p className={style.bannerP1}>(ACADEMIC) <br/>Full Stack Web Developer<br/> 
                                      Soy Henry <a href='https://www.soyhenry.com/'>(www.soyhenry.com)</a><br/>
                                      Development of a Single Page App<br/>
                                      Consuming Api and using Database<br/><hr /> <br/>
                                      Development of a website marketplace,<br/>
                                      with payment gateway and authentication,<br/> 
                                      working with a multinational team<br/> 
                                      applying agile technologies<br/>
                                      <br/><br />  
                                                                          
                                      </p>
        </div>
        <div className={style.bannerItem}>
          <p className={style.bannerTitle}>Hobbies</p><br/>
            <p className={style.bannerP1}>Love to spend time with family<br/>
                                          and friends<br/><br/>
                                          I like movies, I love medieval and superhero genres.<br/><br/>
                                          Used to practice martial Arts<br/>(Karate Do and Kickboxing)<br/><br/>
                                          I like online games, and play console games with friends
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;