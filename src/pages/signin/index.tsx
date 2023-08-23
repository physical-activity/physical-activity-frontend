import './index.css';
import Header from 'entities/Header/Header';
import { SignInForm } from 'entities/SignInForm';
import { Footer } from 'entities/Footer';
import { useGoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from 'shared/hooks/redux';
import { useNavigate } from 'react-router';
import { userAuthGoogle } from 'store/reducers/userSlice';

export const SignInPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const login = useGoogleLogin({
		scope: 'https://www.googleapis.com/auth/fitness.activity.read',
		onSuccess: async (tokenResponse) => {
			localStorage.setItem('google_access_token', tokenResponse.access_token);
			dispatch(userAuthGoogle()).then(() => navigate('/'));
		},
		onError: (errorResponse) => console.log(errorResponse),
	});

	// ЗАПРОС К ГУГЛАПИ

	const read = async () => {
		let token = localStorage.getItem('google_access_token');
		console.log(token);
		const res = await fetch(
			`https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					aggregateBy: [
						{
							dataTypeName: 'com.google.step_count.delta',
							dataSourceId:
								'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
						},
					],
					bucketByTime: { durationMillis: 86400000 },
					startTimeMillis: 1438705622000,
					endTimeMillis: 1439310422000,
				}),
			}
		);
		let response;
		// let response2;
		if (res.status === 200) {
			response = await res.json();
			console.log(response);
			console.log(res);
		} else {
			throw new Error('lolol');
		}
	};

	return (
		<main className="main">
			<Header name={'вход'} />
			<SignInForm />
			<button className="google-auth-button" onClick={() => login()}>
				Войти через аккаунт Google 🚀{' '}
			</button>
			<button onClick={() => read()}>read activite</button>
			<Footer footerQuestion={'Еще нет аккаунта?'} footerAnswer={'Создать'} />
		</main>
	);
};
