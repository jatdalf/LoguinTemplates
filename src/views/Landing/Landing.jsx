import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export const Landing = () => {
  return (
    <main className={style.landingContainer}>
      <div className={style.layout}>
        <section className={style.content}>
          <span className={style.eyebrow}>
            A COLLECTION BY JORGE TOSO
          </span>

          <h1 className={style.title}>
            First impressions.
            <span>Better sign-ins.</span>
          </h1>

          <p className={style.description}>
            Explore nine login interfaces built with React.
            Different styles, thoughtful details, and new ways
            to welcome your users.
          </p>

          <div className={style.actions}>
            <Link to="/Home" className={style.primaryButton}>
              Explore the collection
              <span aria-hidden="true">↗</span>
            </Link>

            <span className={style.collectionNote}>
              09 interfaces to discover
            </span>
          </div>

          <div className={style.technologies}>
            <span className={style.builtWith}>BUILT WITH</span>

            <ul aria-label="Technologies">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS & Sass</li>
            </ul>
          </div>
        </section>

        <div className={style.visual} aria-hidden="true">
          <div className={style.backCard}>
            <span className={style.backCardMark}>L / T</span>
            <span>A better way in.</span>
          </div>

          <div className={style.previewCard}>
            <div className={style.previewTop}>
              <span className={style.previewLogo}>lt.</span>
              <span className={style.previewBadge}>THE COLLECTION</span>
            </div>

            <div className={style.previewHeading}>Welcome back.</div>
            <p className={style.previewDescription}>
              Good to see you again.
            </p>

            <div className={style.previewLabel}>Email address</div>
            <div className={style.previewInput}>
              hello@example.com
            </div>

            <div className={style.previewLabel}>Password</div>
            <div className={style.previewInput}>
              <span className={style.passwordDots}>••••••••</span>
              <span className={style.passwordStatus}>Hidden</span>
            </div>

            <div className={style.previewButton}>
              Sign in <span>↗</span>
            </div>

            <div className={style.previewFooter}>
              A fresh start is one click away.
            </div>
          </div>

          <div className={style.floatingTag}>
            <span className={style.statusDot} />
            Small details. Better experiences.
          </div>
        </div>
      </div>

      <footer className={style.footer}>
        <span>Login Templates</span>
        <span>Designed to make an entrance.</span>
      </footer>
    </main>
  );
};

export default Landing;