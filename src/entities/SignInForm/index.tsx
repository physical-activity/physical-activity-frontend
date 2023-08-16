import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Input } from '../Input/Input';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { REGEX } from 'shared/utils/constants';
import { useAppDispatch } from 'shared/hooks/redux';
import { singInUser } from 'store/reducers/userSlice';

export const SignInForm = () => {
	const [isServerError, setIsServerError] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const dataToSend = { password: values.password, email: values.email };
		dispatch(singInUser(dataToSend))
			.then(() => navigate('/'))
			.catch((err) => setIsServerError(true));
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
					type={'text'}
					id="email"
					name={'email'}
					value={values.email}
					placeholder={'Почта'}
					setValue={handleChange}
					pattern={REGEX.email.source}
					isValidInput={errors.email}
					required={true}
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
