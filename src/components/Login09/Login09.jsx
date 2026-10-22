import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login09.module.scss";

const Login09 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <Link to="/Home" className={style.backLink}>
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <section className={style.loginBox} aria-labelledby="login09-title">
        <span className={style.eyebrow}>DARK & BLUE / 09</span>

        <h2 id="login09-title" className={style.title}>
          Make the connection.
        </h2>

        <p className={style.subtitle}>
          Your workspace is one step away.
        </p>

        <form
          className={style.form}
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
        >
          <div className={style.userBox}>
            <input
              className={style.input}
              id="login09-username"
              type="text"
              name="username"
              placeholder=" "
              autoComplete="username"
              required
            />
            <label className={style.label} htmlFor="login09-username">
              Username
            </label>
          </div>

          <div className={style.userBox}>
            <input
              className={style.input}
              id="login09-password"
              type="password"
              name="password"
              placeholder=" "
              autoComplete="current-password"
              required
            />
            <label className={style.label} htmlFor="login09-password">
              Password
            </label>
          </div>

          <button className={style.submit} type="submit">
            <span className={style.edge} aria-hidden="true" />
            <span className={style.edge} aria-hidden="true" />
            <span className={style.edge} aria-hidden="true" />
            <span className={style.edge} aria-hidden="true" />
            Sign in
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

export default Login09;