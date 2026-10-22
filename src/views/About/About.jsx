import { Link } from "react-router-dom";
import style from "./About.module.css";
import mypic1 from "../../assets/MyPic1.jpg";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML & CSS",
  "Sass",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "Supabase",
  "React Native",
  "Git & GitHub",
];

const About = () => {
  return (
    <main className={style.page}>
      <div className={style.container}>
        <Link to="/Home" className={style.backLink}>
          <span aria-hidden="true">←</span> Back to collection
        </Link>

        <section className={style.hero} aria-labelledby="about-title">
          <div className={style.intro}>
            <span className={style.eyebrow}>BEHIND THE INTERFACES</span>

            <h1 id="about-title" className={style.headline}>
              Hi, I’m Jorge.
              <span>I like making things work.</span>
            </h1>

            <p className={style.description}>
              I’m a full stack developer who enjoys turning ideas
              into useful applications — from everyday tools to
              interactive experiences.
            </p>

            <p className={style.description}>
              I care about clear interfaces, thoughtful details,
              and learning through building.
            </p>

            <Link to="/Contact" className={style.contactButton}>
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <figure className={style.portrait}>
            <img
              src={mypic1}
              className={style.photo}
              alt="Jorge Toso"
              decoding="async"
            />

            <figcaption className={style.photoCaption}>
              <span>JORGE TOSO</span>
              <span>Developer & curious mind</span>
            </figcaption>
          </figure>
        </section>

        <div className={style.sections}>
          <section className={style.card}>
            <div className={style.sectionMeta}>
              <span>01 / TOOLKIT</span>
              <span aria-hidden="true">↗</span>
            </div>

            <h2 className={style.sectionTitle}>What I build with.</h2>

            <p className={style.text}>
              Tools I use across web, mobile, and personal projects.
            </p>

            <ul className={style.skills} aria-label="Development skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={style.card}>
            <div className={style.sectionMeta}>
              <span>02 / LEARNING</span>
              <span aria-hidden="true">↗</span>
            </div>

            <h2 className={style.sectionTitle}>A foundation to grow.</h2>

            <ul className={style.entries}>
              <li>
                <h3>Full Stack Web Development</h3>
                <span>Soy Henry Bootcamp</span>
                <p>
                  700 hours of theory and individual and team practice.
                </p>
              </li>

              <li>
                <h3>Computer Systems Analysis</h3>
                <span>IES 21</span>
                <p>Studies in desktop and web application development.</p>
              </li>

              <li>
                <h3>Virtual Simulations & Video Games</h3>
                <span>IES 21</span>
              </li>
            </ul>
          </section>

          <section className={style.card}>
            <div className={style.sectionMeta}>
              <span>03 / PRACTICE</span>
              <span aria-hidden="true">↗</span>
            </div>

            <h2 className={style.sectionTitle}>Learning by doing.</h2>

            <ul className={style.entries}>
              <li>
                <h3>Personal projects</h3>
                <p>
                  Operational workflows, expense tracking,
                  interactive stories, and card game experiences.
                  Projects that turn practical needs and creative
                  ideas into working software.
                </p>
              </li>

              <li>
                <h3>Academic team projects</h3>
                <p>
                  Single-page applications with APIs and databases,
                  and a marketplace with authentication and payment
                  integration, developed with an international team.
                </p>
              </li>

              <li>
                <h3>Login Templates</h3>
                <p>
                  Twelve explorations of layout, animation, and
                  visual identity — brought together in this collection.
                </p>
              </li>
            </ul>
          </section>

          <section className={style.card}>
            <div className={style.sectionMeta}>
              <span>04 / BEYOND CODE</span>
              <span aria-hidden="true">↗</span>
            </div>

            <h2 className={style.sectionTitle}>Always curious.</h2>

            <dl className={style.languages}>
              <div>
                <dt>Spanish</dt>
                <dd>Native</dd>
              </div>

              <div>
                <dt>English</dt>
                <dd>C2 Proficient · EF SET certificate</dd>
              </div>

              <div>
                <dt>Portuguese</dt>
                <dd>Basic · One year of training</dd>
              </div>
            </dl>

            <p className={style.personalNote}>
              Away from the keyboard, I enjoy gardening, fantasy
              and superhero movies, and gaming with friends.
              I’ve also practiced karate and kickboxing.
            </p>
          </section>
        </div>

        <section className={style.closing}>
          <div>
            <span className={style.eyebrow}>HAVE SOMETHING IN MIND?</span>
            <h2 className={style.closingTitle}>
              Let’s make a connection.
            </h2>
          </div>

          <Link to="/Contact" className={style.closingLink}>
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <footer className={style.footer}>
          <span>Login Templates / Jorge Toso</span>
          <span>Built with curiosity.</span>
        </footer>
      </div>
    </main>
  );
};

export default About;