import React from 'react'
import style from "./Login02.module.css"
import LogoImg from "../../assets/OcasaLogoSmall.png"

const Loguin001 = () => {
  return (
  <div class={style.Login2_body}>

  <div class={style.align_item}>
    <div class={style.register}>
    <img src={LogoImg} className={style.spinhov3D} alt="Logo small Ocasa" />
      <h2>Welcome</h2>
      <form action="" method="post" class="form">
        <div class={style.register}>
          <input type="email" placeholder="user@mailaddress.com"/>
        </div>

        <div class={style.form__field}>
          <imput type="password" placeholder="••••••••••••"/>
        </div>

        <div class={style.form__field}>
          <input type="submit" value="Log In"/>
        </div>

      </form>
      <p>enter username and password</p>
    </div>
  </div>
</div>
  )
}

export default Loguin001