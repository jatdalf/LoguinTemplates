import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login04.module.css";
import backgroundVideo from "../../assets/wh-optimized.mp4";

const Login04 = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={style.backgroundVideo}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className={style.overlay} />

      <div className={style.navigation}>
        <Link to="/Home" className={style.backLink}>
          <span aria-hidden="true">←</span> Back to collection
        </Link>

        <button
          type="button"
          className={style.videoToggle}
          onClick={toggleVideo}
        >
          {playing ? "Pause background" : "Play background"}
        </button>
      </div>

      <section className={style.panel} aria-labelledby="login04-title">
        <span className={style.eyebrow}>WELCOME TO YOUR WORKSPACE</span>

        <h2 id="login04-title" className={style.title}>
          Log in
        </h2>

        <p className={style.subtitle}>
          Everything starts with a connection.
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

export default Login04;