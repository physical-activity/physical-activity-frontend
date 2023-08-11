import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Input } from '../Input/Input';
import { signin } from 'shared/api/login';
import { useFormValidation } from 'shared/hooks/useFormValidation';

export const SignInForm = () => {
	const [isServerError, setIsServerError] = useState(false);
	const navigate = useNavigate();
	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signin(values.email, values.password)
			.then((res) => {
				localStorage.setItem('token', res.auth_token);
				navigate('/');
			})
			.catch((err) => {
				setIsServerError(true);
			});
	};

	const handleResetPass = () => {
		navigate('/reset_password');
	};

	useEffect(() => {
		resetForm();
	}, [resetForm]);

	return (
		<form className="form__form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form__input-container">
				<Input
					placeholder={'Почта'}
					name={'email'}
					type={'text'}
					value={values.email}
					setValue={handleChange}
					pattern="[a-zA-Z0-9\-\.]+[\@][a-zA-Z0-9\-]+[\.][a-zA-Z0-9\.]{2,}"
					isValidInput={errors.email}
					required={true}
				/>
				<Input
					required={true}
					placeholder={'Пароль'}
					name={'password'}
					type={'password'}
					value={values.password}
					setValue={handleChange}
					pattern="[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-]*.{5,}"
					isValidInput={errors.password}
				/>
				{isServerError && (
					<span className="form__server-error">
						Неправильно введен пароль или почта
					</span>
				)}

				<button
					className="form__recover-pass"
					// disabled={!canResetPass}
					onClick={() => handleResetPass()}
				>
					Восстановить пароль
				</button>
			</div>

			<div className="form__button-continer">
				<button
					className={`form__button ${!isValid && 'form__button_unvalid'}`}
					disabled={!isValid}
					type="submit"
				>
					Войти
				</button>
			</div>
		</form>
	);
};
