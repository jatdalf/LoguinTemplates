import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.collection}>
      <div className={style.container}>
        <header className={style.heading}>
          <span className={style.eyebrow}>THE COLLECTION</span>

          <div className={style.titleRow}>
            <h1 className={style.title}>
              Twelve ways to <span>welcome.</span>
            </h1>

            <span className={style.counter}>01 — 09</span>
          </div>

          <p className={style.description}>
            Explore different approaches to the sign-in experience.
            Pick a template and see it in action.
          </p>
        </header>

        <section aria-label="Login templates">
          <CardContainer />
        </section>

        <footer className={style.footer}>
          <span>Built with React. Crafted with curiosity.</span>
          <span>Login Templates / Jorge Toso</span>
        </footer>
      </div>
    </main>
  );
};

export default Home;