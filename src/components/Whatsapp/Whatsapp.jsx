import React from "react";
import wspIcon from '../../assets/WhatsApp-Logo.wine.svg'
import style from './Whatsapp.module.css'

const WhatsApp = () => {
    return (
        <a href='https://api.whatsapp.com/send?phone=5496207428' className={style.btnwsp}
        target='_blank' >
            <img source={wspIcon} className={style.iconwhatsapp}></img>
        </a>
           );
};

export default WhatsApp;