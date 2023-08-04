import './RegisterForm.css';
import { useState } from 'react';
import { Input } from '../RegisterInput/RegisterInput';
import { Checkbox } from '../RegisterCheckbox/RegisterCheckbox';
import { useForm } from '../../features/register-form-validator/index';
import { signup } from '../../shared/api/signup';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
	const navigate = useNavigate();
	const { values, handleChange, errors, isValid } = useForm();

	const [nameInputValue, setNameInputValue] = useState('');
	const [emailInputValue, setEmailInputValue] = useState('');
	const [passwordInputValue, setPasswordInputValue] = useState('');
	const [repeatpasswordInputValue, setRepeatpasswordInputValue] = useState('');

	const validateNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setNameInputValue(e.target.value);
	};

	const validateEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setEmailInputValue(e.target.value);
	};

	const validatePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setPasswordInputValue(e.target.value);
	};

	const validateRepeatpasswordInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.value !== passwordInputValue) {
			e.target.setCustomValidity('Пароли не совпадают');
		} else {
			e.target.setCustomValidity('');
		}
		setRepeatpasswordInputValue(e.target.value);
		handleChange(e);
	};

	const validateCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(values.name, values.email, values.password);
		signup(values.name, values.email, values.password)
			.then(() => navigate('/register-confirm'))
			.catch((err) => {
				if (
					`${err}` === 'Error: {"email":["User с таким email уже существует."]}'
				) {
					console.log('Аккаунт с почтой «account@mail.ru» уже зарегистрирован');
					// Здесь прописать открытие попапа с уведомлением
				} else {
					navigate('/register-error');
				}
			});
	}

	return (
		<form className="register__form" onSubmit={handleSubmit}>
			<div className="register__input-container">
				<Input
					type="text"
					id="name"
					name="name"
					value={nameInputValue}
					placeholder="Ваше имя"
					validateInput={validateNameInput}
					isValidInput={errors.name}
					pattern="[A-Za-zА-Яа-я\s-]{2,}"
				/>
				<Input
					type="email"
					id="email"
					name="email"
					value={emailInputValue}
					placeholder="Почта"
					validateInput={validateEmailInput}
					isValidInput={errors.email}
					pattern="^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$"
				/>
				<Input
					type="password"
					id="password"
					name="password"
					value={passwordInputValue}
					placeholder="Пароль"
					validateInput={validatePasswordInput}
					isValidInput={errors.password}
					pattern="[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-]*.{6,}"
				/>
				<Input
					type="password"
					id="repeatpassword"
					name="repeatpassword"
					value={repeatpasswordInputValue}
					placeholder="Повторите пароль"
					validateInput={validateRepeatpasswordInput}
					isValidInput={errors.repeatpassword}
					pattern="[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-]*.{6,}"
				/>
				<Checkbox
					type="checkbox"
					id="terms"
					name="terms"
					validateInput={validateCheckboxInput}
				/>
			</div>
			<div className="register__button-container">
				<button
					className={`register__button ${
						!isValid && 'register__button_unvalid'
					}`}
					disabled={!isValid}
				>
					Поехали
				</button>
			</div>
		</form>
	);
};
