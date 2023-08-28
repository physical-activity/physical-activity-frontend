import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Input } from '../Input/Input';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { REGEX } from 'shared/utils/constants';
import { useAppDispatch } from 'shared/hooks/redux';
import { singInUser, userAuthGoogle } from 'store/reducers/userSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import googleLogo from './google.svg';
import vkLogo from './vk.svg';

export const SignInForm = ({
	setIsPopupOpen,
}: {
	setIsPopupOpen: (arg: boolean) => void;
}) => {
	const [isServerError, setIsServerError] = useState(false);
	const [errorText, setErrorText] = useState('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();

	const login = useGoogleLogin({
		scope: 'https://www.googleapis.com/auth/fitness.activity.read',
		onSuccess: async (tokenResponse) => {
			localStorage.setItem('google_access_token', tokenResponse.access_token);
			dispatch(userAuthGoogle())
				.unwrap()
				.then(() => navigate('/'))
				.catch((err) => {
					setIsServerError(true);
					setErrorText('Не возможно войти с предоставленными данными Google');
				});
		},
		onError: (errorResponse) => console.log(errorResponse),
	});

	const read = async () => {
		let token = localStorage.getItem('google_access_token');
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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const dataToSend = { password: values.password, email: values.email };
		dispatch(singInUser(dataToSend))
			.unwrap()
			.then(() => navigate('/'))
			.catch((err) => {
				setIsServerError(true);
				if (err.message === 'Invalid Data') {
					setErrorText('Неправильно введен пароль или e-mail');
				} else {
					setErrorText('Сервер не отвечает');
				}
			});
	};

	const handleResetPass = () => {
		setIsPopupOpen(true);
	};

	useEffect(() => {
		resetForm();
	}, [resetForm]);

	return (
		<form className="form__form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form__input-container">
				<Input
					type={'text'}
					id="email"
					name={'email'}
					value={values.email}
					placeholder={'Почта'}
					setValue={handleChange}
					pattern={REGEX.email.source}
					isValidInput={errors.email}
					required={true}
					isServerError={isServerError}
				/>
				<Input
					required={true}
					placeholder={'Пароль'}
					name={'password'}
					id="password"
					type={'password'}
					value={values.password}
					setValue={handleChange}
					pattern={REGEX.password.source}
					isValidInput={errors.password}
					isServerError={isServerError}
				/>
				{isServerError && (
					<span className="form__server-error">{errorText}</span>
				)}
			</div>

			<button
				className="form__recover-pass"
				// disabled={!canResetPass}
				onClick={() => handleResetPass()}
			>
				Забыли пароль?
			</button>
			<button
				className={`form__button ${!isValid && 'form__button_unvalid'}`}
				disabled={!isValid}
				type="submit"
			>
				Войти
			</button>
			<div className="form_div-span">
				<span className="form_span">ИЛИ</span>
			</div>
			<div className="auth-social">
				<button className="auth-button" onClick={() => login()}>
					<img src={googleLogo} />
					<p className="auth-text">Продолжить с Google</p>
				</button>
				<Link
					to="https://oauth.vk.com/authorize?client_id=51731957&redirect_uri=https://easyfit.space&response_type=code&scope=email"
					className="auth-button"
				>
					<img src={vkLogo} />
					<p className="auth-text">Продолжить с VK</p>
				</Link>
			</div>
			<button onClick={() => read()}>read activite</button>
		</form>
	);
};
