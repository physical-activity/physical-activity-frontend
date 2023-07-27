import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input/Input';
import './index.css';
import { useFormValidation } from 'shared/hooks/useFormWithValidation';
import { signin } from 'shared/api/login';

export const SignInForm = ({}: {}) => {
	const [isValid, setIsvalid] = useState(true);
	const [emailValue, setEmailValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [isError, setIsError] = useState(false);

	const navigate = useNavigate();
	const formValidator = useFormValidation();

	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
		formValidator.handleChange(e);
	};

	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassValue(e.target.value);
		formValidator.handleChange(e);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsvalid(false);
		signin(emailValue, passValue)
			.then(() => navigate('/'))
			.catch((err) => {
				setIsError(true);
				// обработка ошибок
				err.code = 403;
				if (err.code === 403) {
					// неправильный пароль или почта
				} else if (err.code === 228) {
					// делаем что-то еще
				}
			});
	};

	const handleResetPass = () => {
		navigate('/reset_password');
	};

	useEffect(() => {
		setIsvalid(formValidator.isValid);
	}, [passValue, emailValue, formValidator.isValid]);

	return (
		<form className="form__form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form__input-container">
				<Input
					placeholder={'Почта'}
					name={'email'}
					type={'text'}
					value={emailValue}
					setValue={handleChangeEmail}
					pattern="[a-zA-Z0-9\-\.]+[\@][a-zA-Z0-9\-]+[\.][a-zA-Z0-9\.]{2,}"
					isValidInput={formValidator.errors.email}
				/>
				<Input
					placeholder={'Пароль'}
					name={'password'}
					type={'password'}
					value={passValue}
					setValue={handleChangePassword}
					pattern="[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-]*.{5,}"
					isValidInput={formValidator.errors.password}
				/>
				{isError && (
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
