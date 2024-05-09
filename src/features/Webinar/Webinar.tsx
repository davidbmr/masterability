import { AppContainer } from "@/components/AppContainer/AppContainer";
import style from "./Webinar.module.css";
import { Card } from "@/components/Card/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const Webinar = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navigate = useNavigate();

  return (
    <AppContainer>
      <section className={style.webinar__cover}>
        <div className={style.webinar__info__container}>
          <h2 className={style.webinar__title}>Administración y Negocios</h2>
          <p className={style.webinar__text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum illo quam repellat ipsa repudiandae sit blanditiis alias natus
            est. Adipisci tempora ratione recusandae explicabo, necessitatibus
            dolorem veniam blanditiis maxime? Quasi commodi assumenda possimus
            inventore nostrum laboriosam, aut facere incidunt repellat nihil
            nam, accusantium illum, iusto velit dolore fugiat doloremque.
          </p>
        </div>
      </section>

      <br />
      <br />
      <section className={style.webinar__img__container}>
        <div className="youtube-playlist"> 
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=5IkiriLSbq8kk4VH&list=PLtZICfpimGe8DXP3tHr0PRxMClRKxAzV5"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
        {/* <img
          className={style.webinar__img}
          src="/public/assets/img-default.png"
          alt="img"
        /> */}
      </section>
      <br />
      <br />
      <section>
            <h2>Curso a cargo de:</h2>
            <br />
            <div className={style.card__person}>
              <div className={style.img__person}>
                <img
                  className={style.webinar__img}
                  src="/public/assets/webinar/mentor.png"
                  alt="img"
                />
              </div>
              <div className={style.description__person}>
                <h3>Karen Soria</h3>
                <p>Título/Carrera/Phd</p>
                <p>
                  Info extra sobre su trayectoria o lo que lo haga calificado
                  para dar el curso
                </p>
              </div>
            </div>
          </section>
      <br />
      <br />
      <section>
        <h2>Cosas que podrás hacer en la mentoría:</h2>
        <ul>
          <li>• Cómo es la carrera de Administración y negocios.</li>
          <li>
            • Cómo se ve el mercado laboral para un administrador peruano.
          </li>
          <li>
            • Cómo se posiciona la carrera a nivel internacional y que convenios
            existen.
          </li>
          <li>• Que habilidades debe un tener un buen administrador.</li>
        </ul>
      </section>

      <br />
      <section>
        <h2>Cursos que te podrían interesar:</h2>
        <br />
        <br />
        <Carousel responsive={responsive}>
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
          <Card
            title="Título"
            description="Información de que trata exactamente"
            professional="Janeth Peves"
          />
        </Carousel>
      </section>
    </AppContainer>
  );
};
