import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login11.module.css";

const stars = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 9) % 100}%`,
  top: `${(index * 23 + 7) % 100}%`,
  size: `${index % 4 === 0 ? 3 : 2}px`,
  delay: `${-(index % 7)}s`,
  duration: `${3 + (index % 5)}s`,
}));

const Login11 = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <div className={style.sky} aria-hidden="true">
        <div className={style.nebula} />
        <div className={style.moon} />

        {stars.map((star) => (
          <span
            key={star.id}
            className={style.star}
            style={{
              left: star.left,
              top: star.top,
              "--size": star.size,
              "--delay": star.delay,
              "--duration": star.duration,
            }}
          />
        ))}
      </div>

      <Link to="/Home" className={style.backLink}>
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <div className={style.composition}>
        <header className={style.intro}>
          <span className={style.eyebrow}>SOMEWHERE BEYOND THE ORDINARY</span>
          <h1 className={style.headline}>A little wonder awaits.</h1>
        </header>

        <div className={style.portal}>
          <div className={style.portalRing} aria-hidden="true" />

          <section className={style.panel} aria-labelledby="login11-title">
            <div className={style.emblem} aria-hidden="true">✧</div>

            <span className={style.chapter}>THE MOONLIT PORTAL</span>

            <h2 id="login11-title" className={style.title}>
              Welcome, dreamer.
            </h2>

            <p className={style.subtitle}>
              Step softly. There’s magic on the other side.
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
                  placeholder="Your secret words"
                  autoComplete="current-password"
                  required
                />
              </label>

              <button className={style.submit} type="submit">
                Open the portal
                <span aria-hidden="true">✧</span>
              </button>

              {submitted && (
                <p className={style.feedback} role="status">
                  A little magic, just a demo. No credentials were sent.
                </p>
              )}
            </form>

            <p className={style.demoNote}>
              Interface demo — use sample details.
            </p>
          </section>
        </div>

        <footer className={style.footer}>
          <span aria-hidden="true">✦</span>
          A quiet moment. A new beginning.
          <span aria-hidden="true">✦</span>
        </footer>
      </div>
    </main>
  );
};

export default Login11;