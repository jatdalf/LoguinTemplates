import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ ID, name, cardImg, cardAdress }) => {
  const number = String(ID).padStart(2, "0");

  return (
    <article className={style.card}>
      <Link
        to={`/${cardAdress}`}
        className={style.cardLink}
        aria-label={`Explore ${name}`}
      >
        <div className={style.preview}>
          <img
            className={style.image}
            src={cardImg}
            alt={`Preview of the ${name} login interface`}
            loading="lazy"
            decoding="async"
          />

          <span className={style.previewAction} aria-hidden="true">
            View template ↗
          </span>
        </div>

        <div className={style.content}>
          <div className={style.meta}>
            <span className={style.category}>LOGIN INTERFACE</span>
            <span className={style.number}>{number}</span>
          </div>

          <h2 className={style.title}>{name}</h2>

          <div className={style.bottom}>
            <span className={style.technology}>React / CSS</span>

            <span className={style.explore}>
              Explore
              <span className={style.arrow} aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;