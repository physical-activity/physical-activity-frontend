import { Route, Routes, useLocation } from 'react-router-dom';
import { SignInPage } from './signin';
import { ConfirmNewPasswordPage } from './confirm-pass-page';
import { ResetPasswordPage } from './reset-pass-page';
import { HomePageMobile } from './home-page';
import { RegisterPage } from './register';
import { RegisterConfirmPage } from './register-confirm';
import { RegisterSuccessPage } from './register-success';
import { RegisterErrorPage } from './register-error';
import { PersonalAccaunt } from './personal-accaunt';
import { useEffect } from 'react';
import { getUserData, userAuthVK } from 'store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { TrainingPageMobile } from './training';
import { MyTrainingsPageMobile } from './my-trainings';
import { Landing } from './landing';
import { Statistics } from './statistics';
import { useNavigate } from 'react-router-dom';
import useResize from '../shared/hooks/useResize';
import RequireAuth from 'shared/hooks/require-auth';

export const Routing = () => {
	const dispatch = useAppDispatch();
	const userData = useAppSelector((state) => state.user);
	const location = useLocation();
	const navigate = useNavigate();
	const size = useResize();
	let windowWidth = size[0];

	function redirectToLanding() {
		console.log(windowWidth);
		if (windowWidth >= 992) {
			navigate(`/landing`);
		}
	}

	useEffect(() => {
		redirectToLanding();
	}, [windowWidth]);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(getUserData());
		}
	}, [dispatch, userData.auth_token]);

	useEffect(() => {
		if (location.search) {
			dispatch(userAuthVK(location.search.replace('?code=', '')));
		}
	}, [dispatch, location]);

	return (
		<Routes>
			<Route path="/" element={<HomePageMobile />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/reset_password" element={<ResetPasswordPage />} />
			<Route
				path="/auth/set_new_password/:uid/:token"
				element={<ConfirmNewPasswordPage />}
			/>
			<Route path="/register-confirm" element={<RegisterConfirmPage />} />
			<Route path="/register-success" element={<RegisterSuccessPage />} />
			<Route path="/register-error" element={<RegisterErrorPage />} />
			<Route path="/users/:id" element={<PersonalAccaunt />} />
			<Route path="/training" element={<TrainingPageMobile />} />
			<Route path="/my-trainings" element={<MyTrainingsPageMobile />} />
			<Route path="/landing" element={<Landing />} />
			<Route path="/statistics" element={<Statistics />} />
		</Routes>
	);
};
