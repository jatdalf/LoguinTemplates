import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login06.module.css";

const Login06 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <div className={style.scene} aria-hidden="true">
        <div className={style.stars} />
        <div className={style.sun} />
        <div className={style.horizon} />
        <div className={style.gridPlane}>
          <div className={style.grid} />
        </div>
      </div>

      <Link to="/Home" className={style.backLink}>
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <div className={style.composition}>
        <header className={style.intro}>
          <span className={style.eyebrow}>THE NEXT CHAPTER / 06</span>
          <h1 className={style.headline}>WELCOME</h1>
          <p className={style.tagline}>Your future is on the horizon.</p>
        </header>

        <section className={style.panel} aria-labelledby="login06-title">
          <div className={style.panelTop}>
            <span className={style.panelLabel}>ACCESS PORTAL</span>
            <span className={style.status}>
              <span className={style.statusDot} />
              ONLINE
            </span>
          </div>

          <div className={style.panelContent}>
            <h2 id="login06-title" className={style.title}>
              Step inside.
            </h2>

            <p className={style.subtitle}>
              Connect to your next possibility.
            </p>

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
                  placeholder="Enter username"
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
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
              </label>

              <button type="submit" className={style.submit}>
                Enter portal
                <span aria-hidden="true">↗</span>
              </button>

              {submitted && (
                <p className={style.feedback} role="status">
                  Demo complete. No credentials were sent.
                </p>
              )}
            </form>

            <p className={style.demoNote}>
              Interface demo / use sample details
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login06;