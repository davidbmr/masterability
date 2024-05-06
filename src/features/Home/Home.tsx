import { MainHeader } from "@/components/MainHeader/MainHeader";
import style from "./Home.module.css";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";
import { MainFooter } from "@/components/MainFooter/MainFooter";
import { PromotionCard } from "./components/PromotionCard/PromotionCard";

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
						pathButton="webinars"
					/>
					<ServiceCard
						img="/public/assets/home/service-2.png"
						title="Mentorias"
						description="Sesiones virtuales sincrónicas"
						textButton="Conversa"
						pathButton="mentorias"
					/>
					<ServiceCard
						img="/public/assets/home/service-3.png"
						title="Cursos"
						description="Cursos virtuales prácticos con enfoque vocacional"
						textButton="Experimenta"
						pathButton="cursos"
					/>
				</div>
			</section>

			<section className={style.section__services}>
				<h2 className={style.section__title}>APROVECHA LAS PROMOCIONES QUE TENEMOS PARA TI</h2>
				<div className={style.section__card__container}>
					<PromotionCard
					title="Mentoría Individual"
					description="Incluye 3 mentorías mensuales de 1h"
					price="Desde s/.59.90"
					textButton="Comienza ya"
					pathButton="webinars"
					/>
					<PromotionCard
					title="Paquete de mentorías"
					description="Incluye 3 mentorías mensuales de 1h"
					price="Desde s/.150"
					textButton="Comienza ya"
					pathButton="webinars"
					/>
					<PromotionCard
					title="Experiencias Individuales"
					description="Incluye una mentoría complementaria de 30 min"
					price="Desde s/.99.90"
					textButton="Comienza ya"
					pathButton="webinars"
					/>
					<PromotionCard
					title="Paquete Máster"
					description="Incluye el acceso a 3 experiencias de su preferencia"
					price="Desde s/.200.00"
					textButton="Comienza ya"
					pathButton="webinars"
					/>
				</div>
			</section>
			<MainFooter />
		</>
	);
};
