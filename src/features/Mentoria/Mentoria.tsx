import { AppContainer } from "@/components/AppContainer/AppContainer";
import style from "./Mentoria.module.css";
import { Card } from "@/components/Card/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Button } from "primereact/button";
// import { useNavigate } from "react-router-dom";

export const Mentoria = () => {
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
  // const navigate = useNavigate();

  return (
    <AppContainer>
      <section className={style.webinar__cover}>
        <div className={style.webinar__info__container}>
          <h2 className={style.webinar__title}>
            Comunicaciones y Audiovisuales: Fatima Carvajal
          </h2>
          <p className={style.webinar__text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum illo quam repellat ipsa repudiandae sit blanditiis alias natus
            est. Adipisci tempora ratione recusandae explicabo, necessitatibus
            dolorem veniam blanditiis maxime? Quasi commodi assumenda possimus
            inventore nostrum laboriosam, aut facere incidunt repellat nihil
            nam, accusantium illum, iusto velit dolore fugiat doloremque.
          </p>
          <div>
            <h2>Curso a cargo de:</h2>
            <br />
            <div className={style.card__person}>
              <div className={style.img__person}>
                <img
                  className={style.webinar__img}
                  src="/public/assets/mentoria/fatima.png"
                  alt="img"
                />
              </div>
              <div className={style.description__person}>
                <h3>Fátima Carbajal</h3>
                <p>Título/Carrera/Phd</p>
                <p>
                  Info extra sobre su trayectoria o lo que lo haga calificado
                  para dar el curso
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={style.webinar__description__container}>
          <p className={style.price__description}>S/50.00</p>
          <div className={style.card__description}>
          <a
              href="https://api.whatsapp.com/send?phone=920%20649%20979&text=%C2%A1Hola%21%2c%20quisiera%20hacer%20una%20consulta%20sobre%20una%20%20mentor%C3%ADa%20o%20curso&source=&data="
              target="_blank" className={style.card__button}
            >Agenda tu mentoría</a>
            {/* <Button
              className={style.card__button}
              onClick={() => navigate("#")}
            >
              Agenda tu mentoría
            </Button> */}
            <p className={style.title__description}>Horarios disponibles</p>
            <p className={style.text__description}>Viernes 6:00 pm - 8:00 pm</p>
            <p className={style.title__description}>Duración</p>
            <p className={style.text__description}>1h</p>
            <p className={style.title__description}>Idioma</p>
            <p className={style.text__description}>Español</p>
            <p className={style.title__description}>Plataforma</p>
            <p className={style.text__description}>Google Meet</p>
            <p className={style.title__description}>Número de participantes</p>
            <p className={style.text__description}>Hasta 6</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className={style.webinar__img__container}>
        <img
          className={style.webinar__img}
          src="/public/assets/mentoria/mentoria.png"
          alt="img"
        />
      </section>
      <br />
      <br />
      <section>
        <h2>Cosas que podrás hacer en la mentoría:</h2>
        <ul>
          <li>
            • Hacer preguntas directas al profesional sobre su carrera y el
            mercado laboral.
          </li>
          <li>
            • Escuchar testimonios de situaciones reales afines a la carrera.
          </li>
          <li>
            • Conocer las habilidades que se desarrollan durante la carrera y
            sus obstáculos.
          </li>
          <li>
            • Resolver dudas y recibir consejos por parte del profesional.
          </li>
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
