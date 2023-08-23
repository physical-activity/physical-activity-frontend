import './index.css';
import Header from 'entities/Header/Header';
import { SignInForm } from 'entities/SignInForm';
import { Footer } from 'entities/Footer';
import { useGoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from 'shared/hooks/redux';
import { useNavigate } from 'react-router';
import { userAuthGoogle } from 'store/reducers/userSlice';
import googleLogo from './google.svg';
import vkLogo from './vk.svg';
import { Link } from 'react-router-dom';

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
			<div className="google-auth">
				<button className="google-auth-button" onClick={() => login()}>
					<img src={googleLogo} />
					<p className="auth-text">Продолжить с Google</p>
				</button>
				<Link
					to="https://oauth.vk.com/authorize?client_id=51731957&redirect_uri=https://easyfit.space&response_type=code&scope=email"
					className="google-auth-button"
				>
					<img src={vkLogo} />
					<p className="auth-text">Продолжить с VK</p>
				</Link>
			</div>
			<button onClick={() => read()}>read activite</button>
			<Footer footerQuestion={'Еще нет аккаунта?'} footerAnswer={'Создать'} />
		</main>
	);
};
