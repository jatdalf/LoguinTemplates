import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login01.module.css";
import bgwh from "../../assets/blueWh.jpg";

const Login01 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      className={style.page}
      style={{ "--login-background": `url("${bgwh}")` }}
    >
      <div className={style.layout}>
        <section className={style.intro}>
          <Link to="/Home" className={style.backLink}>
            <span aria-hidden="true">←</span> Back to collection
          </Link>

          <div className={style.introContent}>
            <span className={style.eyebrow}>
              TEMPLATE 01 / BACKGROUND IMAGE
            </span>

            <h1 className={style.headline}>
              Everything
              <br />
              in its place.
            </h1>

            <p className={style.introText}>
              A clear view. A fresh start.
              Sign in and keep things moving.
            </p>
          </div>

          <span className={style.signature}>
            Login Templates / Jorge Toso
          </span>
        </section>

        <section className={style.panel} aria-labelledby="login01-title">
          <span className={style.brandMark} aria-hidden="true">
            lt.
          </span>

          <header className={style.formHeader}>
            <span className={style.kicker}>YOUR WORKSPACE AWAITS</span>
            <h2 id="login01-title" className={style.title}>
              Welcome back.
            </h2>
            <p className={style.subtitle}>
              Enter your details to sign in.
            </p>
          </header>

          <form
            className={style.form}
            onSubmit={handleSubmit}
            onChange={() => setSubmitted(false)}
          >
            <div className={style.field}>
              <label htmlFor="login01-email" className={style.label}>
                Email address
              </label>

              <input
                id="login01-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@example.com"
                className={style.input}
                required
              />
            </div>

            <div className={style.field}>
              <label htmlFor="login01-password" className={style.label}>
                Password
              </label>

              <div className={style.passwordField}>
                <input
                  id="login01-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className={style.input}
                  required
                />

                <button
                  type="button"
                  className={style.passwordToggle}
                  aria-controls="login01-password"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className={style.remember}>
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <button type="submit" className={style.submit}>
              Sign in
              <span aria-hidden="true">↗</span>
            </button>

            {submitted && (
              <p className={style.feedback} role="status">
                Demo complete. No account was accessed and no
                credentials were sent.
              </p>
            )}
          </form>

          <div className={style.demoNote}>
            <span className={style.noteDot} aria-hidden="true" />
            Interface demo — use sample details.
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login01;