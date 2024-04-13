import style from "./Busqueda.module.css";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { MainFooter } from "@/components/MainFooter/MainFooter";

export const Busqueda = () => {
	return (
		<>
			<MainHeader />

			<section className={style.section__services}>
				<h2 className={style.section__title}>Experimenta tus intereses</h2>
				<div className={style.section__card__container}>
					
				</div>
			</section>

			<MainFooter />
		</>
	);
};