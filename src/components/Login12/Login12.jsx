import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login12.module.css";

const Login12 = () => {
  const [submitted, setSubmitted] = useState(false);
  const [paused, setPaused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={`${style.page} ${paused ? style.paused : ""}`}>
      <div className={style.lights} aria-hidden="true">
        <div className={`${style.blob} ${style.coral}`} />
        <div className={`${style.blob} ${style.violet}`} />
        <div className={`${style.blob} ${style.blue}`} />
      </div>

      <header className={style.navigation}>
        <Link to="/Home" className={style.backLink}>
          <span aria-hidden="true">←</span> Back to collection
        </Link>

        <button
          className={style.motionToggle}
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </header>

      <div className={style.layout}>
        <section className={style.intro}>
          <span className={style.eyebrow}>PRISM / EXPERIMENT Nº 012</span>

          <h1 className={style.headline}>
            Nothing stays
            <br />
            <em>ordinary.</em>
          </h1>

          <p className={style.description}>
            A little movement. A different perspective.
            A new way to begin.
          </p>

          <div className={style.palette} aria-hidden="true">
            <span />
            <span />
            <span />
            <span className={style.paletteCaption}>ALWAYS EVOLVING</span>
          </div>
        </section>

        <section className={style.panel} aria-labelledby="login12-title">
          <div className={style.panelTop}>
            <span className={style.brand}>prism.</span>
            <span className={style.edition}>12 / 12</span>
          </div>

          <h2 id="login12-title" className={style.title}>
            Find your flow.
          </h2>

          <p className={style.subtitle}>
            Welcome back. Make yourself at home.
          </p>

          <form
            className={style.form}
            onSubmit={handleSubmit}
            onChange={() => setSubmitted(false)}
          >
            <label className={style.field}>
              <span>Email address</span>
              <input
                className={style.input}
                type="email"
                name="email"
                placeholder="you@example.com"
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
              Step into your space
              <span aria-hidden="true">↗</span>
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
      </div>

      <footer className={style.footer}>
        <span>LOGIN TEMPLATES / JORGE TOSO</span>
        <span>A study in light & motion.</span>
      </footer>
    </main>
  );
};

export default Login12;