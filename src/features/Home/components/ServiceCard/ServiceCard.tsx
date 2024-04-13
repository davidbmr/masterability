import style from "./ServiceCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

interface Props {
	img?: any;
	title?: string;
	description?: string;
	textButton?: string;
	pathButton?: string;
}

export const ServiceCard = ({ img, title, description, textButton, pathButton = "#" }: Props) => {
	const navigate = useNavigate();

	return (
		<div className={style.card__container}>
			<div className={style.card__img__container}>
				<img className={style.card__img} src={img} alt="imagen del servicio" />
			</div>
			<div className={style.card__info__contain}>
				<h3 className={style.card__title}>{title}</h3>
				<p className={style.card__text}>{description}</p>
			</div>

			<Button className={style.card__button} onClick={() => navigate(`/${pathButton}`)}>
				{textButton}
			</Button>
		</div>
	);
};
