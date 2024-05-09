import style from "./PromotionCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

interface Props {
  title?: string;
  description?: string;
  price?: string;
  activebutton?: boolean;
  textButton?: string;
  pathButton?: string;
  textW?: string;
  activeWhats?: boolean;
}

export const PromotionCard = ({
  title,
  description,
  price,
  textButton,
  pathButton = "#",
  activebutton = true,
  textW,
  activeWhats = false,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className={style.card__container}>
      {/* <div className={style.card__info__contain}> */}
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__text}>{description}</p>
      <p className={style.card__price}>{price}</p>
      {/* </div> */}
      {activeWhats && (
        <a
          href="https://api.whatsapp.com/send?phone=920%20649%20979&text=%C2%A1Hola%21%2c%20quisiera%20hacer%20una%20consulta%20sobre%20una%20%20mentor%C3%ADa%20o%20curso&source=&data="
          target="_blank"
          className={style.card__button2}
        >
          {textW}
        </a>
      )}
      {activebutton && (
        <Button
          className={style.card__button}
          onClick={() => navigate(`/${pathButton}`)}
        >
          {textButton}
        </Button>
      )}
    </div>
  );
};
