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
				<FaFacebook fill="#fff" size={25}/>
				<FaYoutube fill="#fff" size={25}/>
				<IoLogoTiktok fill="#fff" size={25}/>
				<FaInstagram fill="#fff" size={25}/>
				<FaLinkedin fill="#fff" size={25}/>
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
