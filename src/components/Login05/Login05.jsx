import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login05.module.css";

const Login05 = () => {
  const canvasRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    let width = 0;
    let height = 0;
    let drops = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);

      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.fillStyle = "#030906";
      context.fillRect(0, 0, width, height);

      drops = Array.from(
        { length: Math.ceil(width / fontSize) },
        () => Math.floor(Math.random() * height / fontSize)
      );
    };

    const draw = () => {
      context.fillStyle = "rgba(3, 9, 6, 0.09)";
      context.fillRect(0, 0, width, height);
      context.font = `${fontSize}px monospace`;

      drops.forEach((drop, index) => {
        const letter = letters[Math.floor(Math.random() * letters.length)];

        context.fillStyle =
          Math.random() > 0.98 ? "#c7ffdc" : "#27c569";

        context.fillText(letter, index * fontSize, drop * fontSize);

        if (drop * fontSize > height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] += 1;
        }
      });
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const intervalId = window.setInterval(draw, 40);

    return () => {
      window.clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <canvas
        ref={canvasRef}
        className={style.canvas}
        aria-hidden="true"
      />

      <Link to="/Home" className={style.backLink}>
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <section className={style.panel} aria-labelledby="login05-title">
        <div className={style.terminalBar} aria-hidden="true">
          <span className={style.statusDot} />
          <span>ACCESS TERMINAL / 05</span>
        </div>

        <header className={style.heading}>
          <span className={style.prompt} aria-hidden="true">&gt;_</span>

          <h2 id="login05-title" className={style.title}>
            Enter the system.
          </h2>

          <p className={style.subtitle}>
            Your next connection starts here.
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

          <button className={style.submit} type="submit">
            Connect
            <span aria-hidden="true">→</span>
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
      </section>
    </main>
  );
};

export default Login05;