import { Link } from "react-router-dom";
import style from "./Contact.module.css";
import scLogo from "../../assets/LogoSc2.svg";

const channels = [
  {
    number: "01",
    label: "EMAIL",
    title: "Drop me a line.",
    detail: "jorgetoso@hotmail.com",
    href: "mailto:jorgetoso@hotmail.com",
    external: false,
  },
  {
    number: "02",
    label: "LINKEDIN",
    title: "Let’s connect.",
    detail: "linkedin.com/in/jorgetoso",
    href: "https://www.linkedin.com/in/jorgetoso/",
    external: true,
  },
  {
    number: "03",
    label: "WHATSAPP",
    title: "Start a conversation.",
    detail: "+54 351 620 7428",
    href: "https://wa.me/543516207428",
    external: true,
  },
];

const Contact = () => {
  return (
    <main className={style.page}>
      <div className={style.container}>
        <Link to="/Home" className={style.backLink}>
          <span aria-hidden="true">←</span> Back to collection
        </Link>

        <div className={style.layout}>
          <section className={style.intro}>
            <span className={style.eyebrow}>GET IN TOUCH</span>

            <h1 className={style.headline}>
              Good things
              <br />
              start with
              <br />
              <span>a conversation.</span>
            </h1>

            <p className={style.description}>
              Have a project in mind, a question about these
              interfaces, or an idea to share? Let’s talk.
            </p>

            <div className={style.signature}>
              <span className={style.logoTile}>
                <img
                  src={scLogo}
                  className={style.logo}
                  alt=""
                  aria-hidden="true"
                />
              </span>

              <div>
                <span className={style.name}>Jorge Toso</span>
                <span className={style.role}>
                  The person behind Login Templates
                </span>
              </div>
            </div>
          </section>

          <section
            className={style.channels}
            aria-label="Ways to get in touch"
          >
            {channels.map((channel) => (
              <a
                key={channel.number}
                className={style.channel}
                href={channel.href}
                {...(channel.external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                <div className={style.channelMeta}>
                  <span>{channel.label}</span>
                  <span>{channel.number}</span>
                </div>

                <div className={style.channelBody}>
                  <div className={style.channelText}>
                    <h2 className={style.channelTitle}>
                      {channel.title}
                    </h2>
                    <p className={style.channelDetail}>
                      {channel.detail}
                    </p>
                  </div>

                  <span className={style.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>
            ))}

            <a
              href="tel:+543516207428"
              className={style.phoneLink}
            >
              Prefer a call? <span>Call me →</span>
            </a>
          </section>
        </div>

        <footer className={style.footer}>
          <span>Login Templates / Jorge Toso</span>
          <span>Ideas welcome.</span>
        </footer>
      </div>
    </main>
  );
};

export default Contact;