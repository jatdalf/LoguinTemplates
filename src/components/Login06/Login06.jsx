import React, { useState, useEffect } from 'react';
import style from './Login06.module.css';

const Login06 = () => {
    return(
    <div  className={style.body}>
        <div className={style.overlay}>
            <h1>WELCOME</h1>
        </div>
        <div className={style.hey}>
        <div className={style.layerUp}/>
        </div>
        <div className={style.layer0}>
            <div className={style.layer1}>
                <div className={style.layer2}>
                    <div className={style.lines}>
                        <div className={style.layerCorner}></div>                       
                    </div>
                </div>
            </div>
        </div>
        <div className={style.mtn}/>
    </div>
    )
}

export default Login06;