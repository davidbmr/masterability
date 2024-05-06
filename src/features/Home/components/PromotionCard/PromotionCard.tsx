import style from "./PromotionCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

interface Props {
  title?: string;
  description?: string;
  price?: string;
  textButton?: string;
  pathButton?: string;
}

export const PromotionCard = ({
  title,
  description,
  price,
  textButton,
  pathButton = "#",
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className={style.card__container}>
      {/* <div className={style.card__info__contain}> */}
        <h3 className={style.card__title}>{title}</h3>
        <p className={style.card__text}>{description}</p>
        <p className={style.card__price}>{price}</p>
      {/* </div> */}

      <Button
        className={style.card__button}
        onClick={() => navigate(`/${pathButton}`)}
      >
        {textButton}
      </Button>
    </div>
  );
};
