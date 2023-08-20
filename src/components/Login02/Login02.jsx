import React from 'react'
import style from "./Login02.module.css"
import LogoImg from "../../assets/OcasaLogoSmall.png"

const Loguin001 = () => {
  return (
  <div class={style.centrado}>
    <div class={style.align_Center}>
      <div class={style.register}>
      <img src={LogoImg} className={style.spinhov3D} alt="Logo small Ocasa" />
        <h2>Welcome</h2>
        <form action="" method="post" class="form">
          <div class={style.register}>
            <input type="email" placeholder="user@mailaddress.com"/>
          </div>
          <div class={style.register}>
            <input type="password" placeholder="*************"/>
          </div>

          <div class={style.register_submit}>
            <input type="submit" value="Log In"/>
          </div>

        </form>
        <p>Enter username and password</p>
      </div>
    </div>
  </div>
  )
}

export default Loguin001