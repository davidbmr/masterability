import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/features/Home/Home";
import { Busqueda } from "@/features/Busqueda/Busqueda";
import { Webinars } from "@/features/Webinars/Webinars";
import { Mentorias } from "@/features/Mentorias/Mentorias";
import { Cursos } from "@/features/Cursos/Cursos";
import { Mentoria } from "@/features/Mentoria/Mentoria";
import { Webinar } from "@/features/Webinar/Webinar";
import { Curso } from "@/features/Curso/Curso";
import { CurseAll } from "@/features/CurseAll/CurseAll";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/buscar" element={<Busqueda />} />
				<Route path="/webinars" element={<Webinars />} />
				<Route path="/mentorias" element={<Mentorias />} />
				<Route path="/cursos" element={<Cursos />} />

				<Route path="/mentoria" element={<Mentoria />} />
				<Route path="/webinar" element={<Webinar />} />
				<Route path="/curso" element={<Curso />} />
				<Route path="/curso-total" element={<CurseAll />} />
			</Routes>
		</BrowserRouter>
	);
};
