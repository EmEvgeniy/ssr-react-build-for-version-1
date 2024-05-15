import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { I18nextProvider } from "react-i18next";

const App = () => {
	return (
		<I18nextProvider>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</I18nextProvider>
	);
};

export default App;
