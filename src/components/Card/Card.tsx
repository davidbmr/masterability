import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";

interface Props {
	title?: string;
	professional?: string;
	description?: string;
	pathButton?: string;
}

export const Card = ({ title, description, professional, pathButton="#" }: Props) => {
	const navigate = useNavigate();
	return (
		<div className={style.card__container} onClick={()=>navigate(pathButton)}>
			<div className={style.card__img__container}>
				<img className={style.card__img} src="/public/assets/img-default.png" alt="img" />
			</div>
			<div className={style.card__info__container}>
				<div></div>
				<h3>{title}</h3>
				<h3>{professional}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
