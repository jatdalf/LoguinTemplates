import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login10.module.css";

const Login10 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <div className={style.container}>
        <header className={style.topbar}>
          <Link to="/Home" className={style.backLink}>
            <span aria-hidden="true">←</span> Back to collection
          </Link>

          <span className={style.edition}>EDITION Nº 010</span>
        </header>

        <div className={style.composition}>
          <section className={style.editorial}>
            <span className={style.eyebrow}>A SPACE FOR WHAT COMES NEXT</span>

            <h1 className={style.headline}>
              A fresh
              <br />
              <em>perspective.</em>
            </h1>

            <p className={style.description}>
              Good ideas need somewhere to begin.
              Make yourself at home.
            </p>

            <div className={style.artwork} aria-hidden="true">
              <div className={style.arch}>
                <div className={style.sun} />
                <div className={style.hillBack} />
                <div className={style.hillFront} />
              </div>

              <span className={style.artCaption}>
                FIG. 10 — ROOM TO GROW
              </span>
            </div>

            <div className={style.editorialFooter}>
              <span>THOUGHTFULLY SIMPLE.</span>
              <span>EST. 2026</span>
            </div>
          </section>

          <section
            className={style.formPanel}
            aria-labelledby="login10-title"
          >
            <div className={style.formContent}>
              <span className={style.chapter}>01 / COME ON IN</span>

              <h2 id="login10-title" className={style.title}>
                Your place,
                <br />
                again.
              </h2>

              <p className={style.subtitle}>
                Welcome back. Let’s pick up where you left off.
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

                <div className={style.field}>
                  <label htmlFor="login10-password">Password</label>

                  <div className={style.passwordField}>
                    <input
                      id="login10-password"
                      className={style.input}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                    />

                    <button
                      type="button"
                      className={style.passwordToggle}
                      aria-controls="login10-password"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((visible) => !visible)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button type="submit" className={style.submit}>
                  Step inside
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
            </div>

            <div className={style.panelFooter}>
              <span>LOGIN TEMPLATES</span>
              <span className={style.footerStar} aria-hidden="true">✳</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login10;