import { Link, useNavigate } from "react-router-dom";
import style from "./MainHeader.module.css";
import { Button } from "primereact/button";
import { IoSearch } from "react-icons/io5";

export const MainHeader = () => {
	const navigate = useNavigate();
	return (
		<div className={style.mainHeader__container}>
			<div
				className={style.logo__container}
				onClick={() => navigate("/")}
				style={{ cursor: "pointer" }}
			>
				<img src="/public/assets/logo-masterability.png" alt="logo" className={style.logo__img} />
			</div>

			<ul className={style.mainHeader__navList}>
				<Link to="/webinars" className={style.mainHeader__navItem}>
					Webinars
				</Link>
				<Link to="/mentorias" className={style.mainHeader__navItem}>
					Mentorías
				</Link>
				<Link to="/cursos" className={style.mainHeader__navItem}>
					Cursos
				</Link>
				<Link to="/" className={style.mainHeader__navItem}>
					Nosotros
				</Link>
				<div
					onClick={() => navigate("/buscar")}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						padding: "0 10px",
					}}
				>
					<IoSearch fill="#fff" size={25} />
				</div>
			</ul>

			<div>
				<Button className={style.mainHeader__button}>Ingresar</Button>
			</div>
		</div>
	);
};
