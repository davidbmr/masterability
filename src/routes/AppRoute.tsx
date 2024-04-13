import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/features/Home/Home";
import { Busqueda } from "@/features/Busqueda/Busqueda";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/buscar" element={<Busqueda />} />
			</Routes>
		</BrowserRouter>
	);
};
