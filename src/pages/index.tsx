import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './register';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
};
