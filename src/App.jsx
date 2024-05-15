import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { I18nProvider } from "./providers/I18nextProvider";

const App = () => {
	return (
		<I18nProvider>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</I18nProvider>
	);
};

export default App;
