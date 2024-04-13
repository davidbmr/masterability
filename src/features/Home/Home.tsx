import style from "./Home.module.css";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";
import { MainFooter } from "@/components/MainFooter/MainFooter";

export const Home = () => {
	return (
		<>
			<MainHeader />
			<section className={style.section__homeBanner}>
				<img
					className={style.homeBanner__img}
					src="/public/assets/home/home-banner.png"
					alt="banner"
				/>
			</section>

			<section className={style.section__services}>
				<h2 className={style.section__title}>CONOCE LO QUE TENEMOS PARA TI</h2>
				<div className={style.section__card__container}>
					<ServiceCard
						img="/public/assets/home/service-1.png"
						title="Webinars"
						description="Charlas virtuales grabadas"
						textButton="Conecta"
					/>
					<ServiceCard
						img="/public/assets/home/service-2.png"
						title="Mentorias"
						description="Sesiones virtuales sincrónicas"
						textButton="Conversa"
					/>
					<ServiceCard
						img="/public/assets/home/service-3.png"
						title="Cursos"
						description="Cursos virtuales prácticos con enfoque vocacional"
						textButton="Experimenta"
					/>
				</div>
			</section>

			<MainFooter />
		</>
	);
};
