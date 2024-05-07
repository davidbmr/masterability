import style from "./MainFooter.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export const MainFooter = () => {
	return (
		<div className={style.mainFooter__container}>
			<div className={style.social__container}>
				<p>Síguenos:</p>
				<div className={style.social__content}>
				<a href="https://www.facebook.com/" target="_blank"><FaFacebook fill="#fff" size={25}/></a>
				<a href="https://www.youtube.com/channel/UC9dI0by1xRO4Ao0PlFg9Q_Q" target="_blank"><FaYoutube fill="#fff" size={25}/></a>
				<a href="https://www.tiktok.com/@masterability?lang=en" target="_blank"><IoLogoTiktok fill="#fff" size={25}/></a>
				<a href="https://www.instagram.com/masterability.start/" target="_blank"><FaInstagram fill="#fff" size={25}/></a>
				<a href="https://www.linkedin.com/in/masterability-start-aa42822b9/" target="_blank"><FaLinkedin fill="#fff" size={25}/></a>
				</div>
			</div>
			<div className={style.logo__container}>
				<img
					src="/public/assets/logo-masterability-v2.png"
					alt="logo"
					className={style.logo__img}
				/>
			</div>
		</div>
	);
};
