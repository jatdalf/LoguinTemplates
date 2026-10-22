import style from "./Login02.module.css";
import LogoImg from "../../assets/OcasaLogoSmall.png";
import { Link } from "react-router-dom";

const Loguin02 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Demo: no se enviaron datos ni se inició sesión.");
  };

  return (
    <div className={style.centrado}>
  <Link to="/Home" className={style.backLink}>
    <span aria-hidden="true">←</span> Back to collection
  </Link>

  <div className={style.align_Center}>
    {/* El formulario queda como está */}
        <div className={style.register}>
          <img
            src={LogoImg}
            className={style.spinhov3D}
            alt="Logo Ocasa"
          />

          <h2 className={style.loginH2}>Welcome</h2>

          <form onSubmit={handleSubmit}>
            <div className={style.form__field}>
              <input
                className={style.form__Input}
                type="email"
                name="email"
                aria-label="Email address"
                placeholder="user@mailAddress.com"
                autoComplete="username"
                required
              />
            </div>

            <div className={style.form__field}>
              <input
                className={style.form__Input}
                type="password"
                name="password"
                aria-label="Password"
                placeholder="*************"
                autoComplete="current-password"
                required
              />
            </div>

            <div className={style.register_submit}>
              <input
                className={style.logInButton}
                type="submit"
                value="Log In"
              />
            </div>
          </form>

          <p>Enter username and password</p>
        </div>
      </div>
    </div>
  );
};

export default Loguin02;