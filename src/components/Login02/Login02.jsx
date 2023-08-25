import React from 'react'
import style from "./Login02.module.css"
import LogoImg from "../../assets/OcasaLogoSmall.png"

const Loguin001 = () => {
  return (
  <div className={style.centrado}>
    <div className={style.align_Center}>
      <div className={style.register}>
      <img src={LogoImg} className={style.spinhov3D} alt="Logo small Ocasa" />
        <h2 className={style.loginH2}>Welcome</h2>
        <form >
          <div className={style.form__field}>
            <input className={style.form__Input} type="email" placeholder="user@mailAddress.com"/>
          </div>
          <div className={style.form__field}>
            <input className={style.form__Input} type="password" placeholder="*************"/>
          </div>
          <div className={style.register_submit}>
            <input className={style.logInButton} type="submit" value="Log In"/>
          </div>
        </form>
        <p>Enter username and password</p>
      </div>
    </div>
  </div>
  )
}

export default Loguin001