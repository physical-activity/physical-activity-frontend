import { Route, Routes } from 'react-router-dom';
import { SignInPage } from './signin';
import { ResetPasswordPage } from './reset-password';
import { HomePage } from './homePage';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route
				path="/auth/set_new_password/:uid/:token"
				element={<ResetPasswordPage />}
			/>
		</Routes>
	);
};
