import { Route, Routes } from 'react-router-dom';
import { SignInPage } from './signin';
import { ConfirmNewPasswordPage } from './confirm-pass-page';
import { ResetPasswordPage } from './reset-pass-page';
import { HomePageMobile } from './home-page';
import { RegisterPage } from './register';
import { RegisterConfirmPage } from './register-confirm';
import { RegisterSuccessPage } from './register-success';
import { RegisterErrorPage } from './register-error';
import { PersonalAccaunt } from './personal-accaunt';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePageMobile />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route
				path="/auth/set_new_password/:uid/:token"
				element={<ConfirmNewPasswordPage />}
			/>
			<Route path="/reset_password" element={<ResetPasswordPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/register-confirm" element={<RegisterConfirmPage />} />
			<Route path="/register-success" element={<RegisterSuccessPage />} />
			<Route path="/register-error" element={<RegisterErrorPage />} />
			<Route path="/users/:id" element={<PersonalAccaunt />} />
		</Routes>
	);
};
