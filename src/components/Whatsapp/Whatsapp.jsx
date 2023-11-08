import React from "react";
import style from './Whatsapp.module.css';
import wspIcon from '../../assets/WhatsApp-Logo.wine.svg';

const WhatsApp = () => {
    return (
        <a href='https://api.whatsapp.com/send?phone=5493516207428' target='_blank'>
            <div className={style.iconContent}>
                <img className={style.iconwhatsapp} src={wspIcon} alt="WhatsApp Icon" />
            </div>
        </a>
    );
};

export default WhatsApp;
