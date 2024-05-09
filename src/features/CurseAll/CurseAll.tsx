import { AppContainer } from "@/components/AppContainer/AppContainer";
import style from "./CurseAll.module.css";
import { Card } from "@/components/Card/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import { CheckBoxField } from "@/components/CheckBoxField/CheckBoxField";
import { ProgressBar } from "primereact/progressbar";
import { useEffect, useState } from "react";

export const CurseAll = () => {
  const responsive = {
    superLargeDesktop: {
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

  const [porcentaje, setPorcentaje] = useState(0);

  // Modulo 1
  const [completeModule1, setCompleteModule1] = useState(false);
  const [module1, setModule1] = useState({
    isExperiencia: false,
    isBienvenido: false,
    isConoce: false,
    isEscucha: false,
  });

  const onChangeCheack = (e: any) => {
    setModule1((prev: any) => ({
      ...prev,
      [e.target.name]: !e.target.value,
    }));
  };

  useEffect(() => {
    const allComplete = Object.values(module1).every((value) => value === true);
    setCompleteModule1(allComplete);
  }, [module1]);

  // Modulo 2
  const [completeModule2, setCompleteModule2] = useState(false);
  const [module2, setModule2] = useState({
    isExperiencia: false,
    isBienvenido: false,
    isConoce: false,
    isEscucha: false,
  });

  const onChangeCheack2 = (e: any) => {
    setModule2((prev: any) => ({
      ...prev,
      [e.target.name]: !e.target.value,
    }));
  };

  useEffect(() => {
    const allComplete = Object.values(module1).every((value) => value === true);
    setCompleteModule2(allComplete);
  }, [module2]);

  // Incrementando el contador
  useEffect(() => {
    let count = 0;
    if (completeModule1) count++;
    if (completeModule2) count++;

    setPorcentaje(count * 20);
  }, [completeModule1, completeModule2]);

  return (
    <AppContainer>
      <section className={style.webinar__cover}>
        <div className={style.webinar__info__container}>
          <h2 className={style.webinar__title}>Diseño Industrial: Productos</h2>
          <p className={style.webinar__text}>Bienvenido!</p>
          <p className={style.webinar__text}>
            En este curso de diseño de productos vas a poder experimentar cómo
            sería atender un caso real de diseño acompañado de un mentor
            profesional que guiará tu proceso. Podrás probar las habilidades que
            un diseñador necesita para realizar su trabajo al igual que recibir
            consejos claves de tu mentor sobre cómo es vivir la carrera y el
            mercado laboral.
          </p>
          <div className={style.webinar__img__container}>
            <img
              className={style.webinar__img}
              src="/public/assets/curso/img.png"
              alt="img"
            />
          </div>
          {/* <div>
            <h2>Curso a cargo de:</h2>
            <br />
            <div className={style.card__person}>
              <div className={style.img__person}>
                <img
                  className={style.webinar__img}
                  src="/public/assets/curso/mentor.png"
                  alt="img"
                />
              </div>
              <div className={style.description__person}>
                <h3>Nombre del mentor</h3>
                <p>Título/Carrera/Phd</p>
                <p>
                  Info extra sobre su trayectoria o lo que lo haga calificado
                  para dar el curso
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className={style.webinar__description__container}>
          <p className={style.price__description}>Progreso del curso</p>
          <div className={style.card__description}>
            {/* <a
              href="https://api.whatsapp.com/send?phone=920%20649%20979&text=%C2%A1Hola%21%2c%20quisiera%20hacer%20una%20consulta%20sobre%20una%20%20mentor%C3%ADa%20o%20curso&source=&data="
              target="_blank" className={style.card__button}
            >Ingresa al curso</a> */}
            {/* <Button
              className={style.card__button}
              onClick={() => navigate("#")}
            >
              Ingresa al curso
            </Button> */}
            <ProgressBar value={porcentaje}></ProgressBar>
            <p className={style.title__description}>Duración</p>
            <p className={style.text__description}>4h de contenido de video</p>
            <p className={style.title__description}>Idioma</p>
            <p className={style.text__description}>Español</p>
            <p className={style.title__description}>Número de etapas</p>
            <p className={style.text__description}>5</p>
            <p className={style.title__description}>Número de ejercicios</p>
            <p className={style.text__description}>10</p>
            <p className={style.title__description}>Mentoría complementaria</p>
            <p className={style.text__description}>Sí</p>
            <p className={style.title__description}>
              Habilidades que se trabajan
            </p>
            <p className={style.text__description}>Creatividad</p>
            <p className={style.text__description}>Dibujo</p>
            <p className={style.text__description}>Pensamiento Crítico</p>
            <p className={style.text__description}>Empatía</p>
            <p className={style.text__description}>Comunicación</p>
          </div>
        </div>
      </section>
      <br />
      <br />

      <Accordion multiple activeIndex={[0]}>
        <AccordionTab header="Etapa 1: Conocer el problema">
          <h3>Bienvenido!</h3>
          <p className="m-0">
            En esta etapa del curso conocerás a su mentor y aprenderás a navegar
            en nuestra plataforma para cumplir con todas las misiones que
            tenemos para ti. ¿Listo para empezar?
          </p>
          <br />
          <div className={style.etapa1__content}>
            <div className={style.items__box}>
              <CheckBoxField
                textLabel="Conoce la experiencia"
                name="isExperiencia"
                onChange={onChangeCheack}
                value={module1.isExperiencia}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Bienvenido al trabajo"
                name="isBienvenido"
                onChange={onChangeCheack}
                value={module1.isBienvenido}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Conoce el reto"
                name="isConoce"
                onChange={onChangeCheack}
                value={module1.isConoce}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Escucha el caso"
                name="isEscucha"
                onChange={onChangeCheack}
                value={module1.isEscucha}
                reverseDirection
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <iframe
                  title="Empatía"
                  width="1200"
                  height="675"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genial.ly/6636ae461b5cf000148a22dd"
                  // type="text/html"
                  // allowScriptAccess="always"
                  allowFullScreen={true}
                  scrolling="yes"
                  // allowNetworking="all"
                ></iframe>
              </div>
              {/* <div
                  className="container-wrapper-genially"
                  style={{
                    position: "relative",
                    minHeight: 400,
                    maxWidth: "100%",
                  }}
                >
                  <video
                    className="loader-genially"
                    autoPlay
                    loop
                    playsInline
                    muted
                    style={{
                      position: "absolute",
                      top: "45%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 80,
                      height: 80,
                      marginBottom: "10%",
                    }}
                  >
                    <source
                      src="https://static.genial.ly/resources/loader-default-rebranding.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div
                    id="6636ae461b5cf000148a22dd"
                    className="genially-embed"
                    style={{
                      margin: "0px auto",
                      position: "relative",
                      height: "auto",
                      width: "100%",
                    }}
                  ></div>
                </div> */}
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Etapa 2: Analizar la información">
          <h3>Bienvenido!</h3>
          <p className="m-0">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Yorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
          <br />
          <div className={style.etapa1__content}>
            <div className={style.items__box}>
              <CheckBoxField
                textLabel="Task 1"
                name="isExperiencia"
                onChange={onChangeCheack2}
                value={module2.isExperiencia}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name="isBienvenido"
                onChange={onChangeCheack2}
                value={module2.isBienvenido}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name="isConoce"
                onChange={onChangeCheack2}
                value={module2.isConoce}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name="isEscucha"
                onChange={onChangeCheack2}
                value={module2.isEscucha}
                reverseDirection
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <iframe
                  title="Etapa 2"
                  width="1200"
                  height="675"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genial.ly/6636ade2bfa6210014a63c16"
                  // type="text/html"
                  // allowScriptAccess="always"
                  allowFullScreen={true}
                  scrolling="yes"
                  // allowNetworking="all"
                ></iframe>
              </div>
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Etapa 3: Proponer soluciones">
          <h3>Bienvenido!</h3>
          <p className="m-0">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Yorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
          <br />
          <div className={style.etapa1__content}>
            <div className={style.items__box}>
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <iframe
                  title="Etapa 3"
                  width="1200"
                  height="675"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genial.ly/663265add1cb220013388788"
                  // type="text/html"
                  // allowScriptAccess="always"
                  allowFullScreen={true}
                  scrolling="yes"
                  // allowNetworking="all"
                ></iframe>
              </div>
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Etapa 4: Prototipar">
          <h3>Bienvenido!</h3>
          <p className="m-0">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Yorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
          <br />
          <div className={style.etapa1__content}>
            <div className={style.items__box}>
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <iframe
                  title="Curso Interactivo Básico"
                  width="1200"
                  height="675"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genial.ly/663bab928cb113001467a2dc"
                  // type="text/html"
                  // allowScriptAccess="always"
                  allowFullScreen={true}
                  scrolling="yes"
                  // allowNetworking="all"
                ></iframe>
              </div>
            </div>
          </div>
        </AccordionTab>
        <AccordionTab header="Etapa 5: Presentar al cliente">
          <h3>Bienvenido!</h3>
          <p className="m-0">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Yorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
          <br />
          <div className={style.etapa1__content}>
            <div className={style.items__box}>
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
              <CheckBoxField
                textLabel="Task 1"
                name=""
                onChange={() => {}}
                value={false}
                reverseDirection
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0,
                }}
              >
                <iframe
                  title="ENUMERA LAS IMÁGENES"
                  width="1200"
                  height="675"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://view.genial.ly/663bb0bb1fee170014b12aca"
                  // type="text/html"
                  // allowScriptAccess="always"
                  allowFullScreen={true}
                  scrolling="yes"
                  // allowNetworking="all"
                ></iframe>
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
      <br />
      <section>
        <h2>¿A quienes está dirigido este curso?</h2>
        <ul>
          <li>• Jóvenes con mente creativa e interés por la creación.</li>
          <li>• Interesados en la resolución de problemas diversos.</li>
          <li>• Aficionados a la investigación y análisis de datos.</li>
          <li>
            • Todo aquel interesado en la innovación y experimentación de nuevas
            tecnologías.
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
