import style from "./Busqueda.module.css";
import { Card } from "@/components/Card/Card";
import { AppContainer } from "@/components/AppContainer/AppContainer";
import { IoSearch } from "react-icons/io5";

export const Busqueda = () => {
  return (
    <AppContainer>
      <section className={style.section__busqueda}>
        <h2 className={style.section__title}>Experimenta tus intereses</h2>
        <div className={style.input__box}>
          <div>
            <IoSearch fill="#C9C9C9" size={25} />
          </div>
          <input className={style.input__item} placeholder="Search"/>
        </div>
        <div className={style.section__card__container}>
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
        </div>
      </section>
    </AppContainer>
  );
};
