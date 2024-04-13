import { Card } from "@/components/Card/Card";
import style from "./Busqueda.module.css";
import { AppContainer } from "@/components/AppContainer/AppContainer";

export const Busqueda = () => {
	return (
		<AppContainer>
			<section className={style.section__services}>
				<h2 className={style.section__title}>Experimenta tus intereses</h2>
				<div className={style.section__card__container}>
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
