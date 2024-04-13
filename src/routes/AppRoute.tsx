import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/features/Home/Home";
import { Busqueda } from "@/features/Busqueda/Busqueda";
import { Webinars } from "@/features/Webinars/Webinars";
import { Mentorias } from "@/features/Mentorias/Mentorias";
import { Cursos } from "@/features/Cursos/Cursos";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/buscar" element={<Busqueda />} />
				<Route path="/webinars" element={<Webinars />} />
				<Route path="/mentorias" element={<Mentorias />} />
				<Route path="/cursos" element={<Cursos />} />
			</Routes>
		</BrowserRouter>
	);
};
