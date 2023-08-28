import './index.css';
import Header from 'entities/Header/Header';
import { SignInForm } from 'entities/SignInForm';
import { Footer } from 'entities/Footer';
import { useGoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from 'shared/hooks/redux';
import { useNavigate } from 'react-router';
import { userAuthGoogle } from 'store/reducers/userSlice';
import { ResetPasswordPage } from 'pages/reset-pass-page';
import { useState } from 'react';
// import googleLogo from './google.svg';
// import vkLogo from './vk.svg';

export const SignInPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// const login = useGoogleLogin({
	// 	scope: 'https://www.googleapis.com/auth/fitness.activity.read',
	// 	onSuccess: async (tokenResponse) => {
	// 		localStorage.setItem('google_access_token', tokenResponse.access_token);
	// 		dispatch(userAuthGoogle()).then(() => navigate('/'));
	// 	},
	// 	onError: (errorResponse) => console.log(errorResponse),
	// });

	// ЗАПРОС К ГУГЛАПИ

	return (
		<main className="main">
			<Header name={'вход'} />
			<SignInForm setIsPopupOpen={setIsPopupOpen} />
			{isPopupOpen && <ResetPasswordPage setIsPopupOpen={setIsPopupOpen} />}
			{/* <Footer footerQuestion={'Еще нет аккаунта?'} footerAnswer={'Создать'} /> */}
		</main>
	);
};
