import { AppContainer } from "@/components/AppContainer/AppContainer";
import style from "./Cursos.module.css";
import { Card } from "@/components/Card/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Cursos = () => {
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

	return (
		<AppContainer>
			<section className={style.webinar__cover}>
				<div className={style.webinar__info__container}>
					<h2 className={style.webinar__title}>Cursos</h2>
					<p className={style.webinar__text}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis illum illo quam
						repellat ipsa repudiandae sit blanditiis alias natus est. Adipisci tempora ratione
						recusandae explicabo, necessitatibus dolorem veniam blanditiis maxime? Quasi commodi
						assumenda possimus inventore nostrum laboriosam, aut facere incidunt repellat nihil nam,
						accusantium illum, iusto velit dolore fugiat doloremque.
					</p>
				</div>
				<div className={style.webinar__img__container}>
					<img className={style.webinar__img} src="/public/assets/img-default.png" alt="img" />
				</div>
			</section>

			<section>
				<h2>Que cosas puedes lograr con esta experiencia:</h2>
				<ul>
					<li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat!</li>
					<li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat!</li>
					<li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat!</li>
					<li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat!</li>
				</ul>
			</section>

			<br />
			<section>
				<h2>Webinars disponibles:</h2>
				<br />
				<br />
				<Carousel responsive={responsive}>
					<Card
						title="Diseño Industrial: Productos"
						description="Información de que trata exactamente"
						professional="Janeth Peves"
						pathButton="/curso"
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
