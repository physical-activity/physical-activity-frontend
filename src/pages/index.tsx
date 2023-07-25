import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignInPage } from './signin';
import { ResetPasswordPage } from './reset-password';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/signin" element={<SignInPage />} />
			<Route path="/reset-password" element={<ResetPasswordPage />} />
		</Routes>
	);
};
