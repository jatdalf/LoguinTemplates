import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Login03.module.css";

const Login03 = () => {
  const carrouselData = [
    {id: 1, imgUrl: "https://static.wixstatic.com/media/400291_51d1218e2e8545f59d0c267d75336d01~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_51d1218e2e8545f59d0c267d75336d01~mv2.jpg"},
    {id: 2, imgUrl: "https://static.wixstatic.com/media/400291_38d95df91fb84781876d283fe938ed44~mv2.jpg/v1/fill/w_1024,h_512,al_c,q_85,enc_auto/400291_38d95df91fb84781876d283fe938ed44~mv2.jpg"},
    {id: 3, imgUrl: "https://static.wixstatic.com/media/400291_9762f44b737041739268c573e018de9d~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_9762f44b737041739268c573e018de9d~mv2.jpg"},
    {id: 4, imgUrl: "https://static.wixstatic.com/media/400291_f573080d71fd40258320f2bb429b060a~mv2.jpg/v1/fill/w_614,h_614,al_c,lg_1,q_85,enc_auto/400291_f573080d71fd40258320f2bb429b060a~mv2.jpg"},
    {id: 5, imgUrl: "https://static.wixstatic.com/media/400291_9539cf4aae394ff8a7adf60528e661eb~mv2.jpg/v1/fill/w_1024,h_512,al_c,q_85,enc_auto/400291_9539cf4aae394ff8a7adf60528e661eb~mv2.jpg"}
  ]
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const imageCount = carrouselData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((index) => (index + 1) % imageCount);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={style.page}>
      <div className={style.layout}>
        <Link to="/Home" className={style.backLink}>
          <span aria-hidden="true">←</span> Back to collection
        </Link>

        <div className={style.mainContainer}>
          <div className={style.sliderContainer}>
            <div className={style.imagesContainer}>
              {carrouselData.map((image, index) => (
                <img
                  key={image.id}
                  src={image.imgUrl}
                  className={`${style.imageCss} ${
                    index === currentImgIndex ? style.imageActive : ""
                  }`}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>

            <div
              className={style.dotsContainer}
              aria-label="Seleccionar imagen"
            >
              {carrouselData.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`${style.dot} ${
                    index === currentImgIndex ? style.active : ""
                  }`}
                  aria-label={`Mostrar imagen ${index + 1}`}
                  aria-pressed={index === currentImgIndex}
                  onClick={() => setCurrentImgIndex(index)}
                />
              ))}
            </div>
          </div>

          <section
            className={style.loginForm}
            aria-labelledby="login03-title"
          >
            <h2 id="login03-title" className={style.title}>
              Bienvenido
            </h2>

            <p className={style.subtitle}>
              Ingresá a tu cuenta.
            </p>

            <form
              className={style.form}
              onSubmit={handleSubmit}
              onChange={() => setSubmitted(false)}
            >
              <label className={style.field}>
                <span>Usuario</span>
                <input
                  className={style.input}
                  type="text"
                  name="username"
                  placeholder="Tu usuario"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </label>

              <label className={style.field}>
                <span>Contraseña</span>
                <input
                  className={style.input}
                  type="password"
                  name="password"
                  placeholder="Tu contraseña"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>

              <button className={style.submit} type="submit">
                Iniciar sesión
              </button>

              {submitted && (
                <p className={style.feedback} role="status">
                  Demo completada. No se enviaron datos.
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login03;