import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/OcasaLogoSmall.png";
import style from "./Login08.module.scss";

const Login08 = () => {
  const [submitted, setSubmitted] = useState(false);

  const [instances] = useState(() =>
    Array.from({ length: 15 }, (_, index) => ({
      id: index,
      left: `${4 + Math.random() * 92}%`,
      size: `${36 + Math.random() * 38}px`,
      duration: `${12 + Math.random() * 10}s`,
      delay: `${-Math.random() * 22}s`,
      drift: `${Math.random() * 100 - 50}px`,
      spinDuration: `${5 + Math.random() * 5}s`,
      opacity: 0.16 + Math.random() * 0.2,
    }))
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <div className={style.animationLayer} aria-hidden="true">
        {instances.map((instance) => (
          <div
            key={instance.id}
            className={style.floatingLogo}
            style={{
              left: instance.left,
              "--size": instance.size,
              "--duration": instance.duration,
              "--delay": instance.delay,
              "--drift": instance.drift,
              "--spin-duration": instance.spinDuration,
              "--logo-opacity": instance.opacity,
            }}
          >
            <img
              src={LogoImg}
              className={style.instance}
              alt=""
            />
          </div>
        ))}
      </div>

      <Link to="/Home" className={style.backLink}>
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <section className={style.panel} aria-labelledby="login08-title">
        <div className={style.brand}>
          <span className={style.brandTile}>
            <img src={LogoImg} className={style.brandLogo} alt="Ocasa" />
          </span>
          <span className={style.brandCaption}>ALWAYS IN MOTION</span>
        </div>

        <header className={style.heading}>
          <h2 id="login08-title" className={style.title}>
            Welcome back.
          </h2>

          <p className={style.subtitle}>
            Sign in and keep moving forward.
          </p>
        </header>

        <form
          className={style.form}
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
        >
          <label className={style.field}>
            <span>Username</span>
            <input
              className={style.input}
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </label>

          <label className={style.field}>
            <span>Password</span>
            <input
              className={style.input}
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </label>

          <button className={style.submit} type="submit">
            Sign in <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p className={style.feedback} role="status">
              Demo complete. No credentials were sent.
            </p>
          )}
        </form>

        <p className={style.demoNote}>
          Interface demo — use sample details.
        </p>
      </section>
    </main>
  );
};

export default Login08;