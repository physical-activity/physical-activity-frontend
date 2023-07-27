import { Route, Routes } from 'react-router-dom';
import { SignInPage } from './signin';
import { ConfirmNewPasswordPage } from './confirm-pass-page';
import { ResetPasswordPage } from './reset-pass-page';
import { HomePage } from './homePage';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route
				path="/auth/set_new_password/:uid/:token"
				element={<ConfirmNewPasswordPage />}
			/>
			<Route path="/reset_password" element={<ResetPasswordPage />} />
		</Routes>
	);
};
