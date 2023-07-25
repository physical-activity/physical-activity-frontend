import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './register';
import { RegisterConfirmPage } from './register-confirm';
import { RegisterSuccessPage } from './register-success';
import { RegisterErrorPage } from './register-error';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/register-confirm" element={<RegisterConfirmPage />} />
			<Route path="/register-success" element={<RegisterSuccessPage />} />
			<Route path="/register-error" element={<RegisterErrorPage />} />
		</Routes>
	);
};
