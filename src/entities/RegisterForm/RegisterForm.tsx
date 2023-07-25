import './RegisterForm.css';
import { useState } from 'react';
import { Input } from '../RegisterInput/RegisterInput';
import { Checkbox } from '../RegisterCheckbox/RegisterCheckbox';
import { useForm } from '../../features/register-form-validator/index';
// import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
	const validation = useForm();
	const [isValidNameInput, setIsValidNameInput] = useState('');
	const [isValidEmailInput, setIsValidEmailInput] = useState('');
	const [isValidPasswordInput, setIsValidPasswordInput] = useState('');
	const [isValidRepeatpasswordInput, setIsValidRepeatpasswordInput] =
		useState('');

	const validateNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		validation.handleChange(e);
		setIsValidNameInput(validation.errors.name);
		console.log(validation.errors.name);
	};

	const validateEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		validation.handleChange(e);
		setIsValidEmailInput(validation.errors.email);
		console.log(validation.errors.email);
	};

	const validatePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		validation.handleChange(e);
		setIsValidPasswordInput(validation.errors.password);
		console.log(validation.errors.password);
	};

	const validateRepeatpasswordInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		validation.handleChange(e);
		setIsValidRepeatpasswordInput(validation.errors.repeatpassword);
		console.log(validation.errors.repeatpassword);
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		// register(validation.values)
		// 	.then(() => navigate('/register-confirm'))
		// 	.catch((err) => {
		// 		console.log(`Не удалось зарегистрировать пользователя. ${err}`);
		// 	});
	}

	return (
		<form className="register__form" onSubmit={handleSubmit}>
			<div className="register__input-container">
				<Input
					type="text"
					id="name"
					name="name"
					placeholder="Ваше имя"
					validateInput={validateNameInput}
					isValidInput={isValidNameInput}
					pattern={'^[A-Za-zА-Яа-я\\s-]+$'}
				/>
				<Input
					type="email"
					id="email"
					name="email"
					placeholder="Почта"
					validateInput={validateEmailInput}
					isValidInput={isValidEmailInput}
					pattern={'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]+'}
				/>
				<Input
					type="password"
					id="password"
					name="password"
					placeholder="Пароль"
					validateInput={validatePasswordInput}
					isValidInput={isValidPasswordInput}
					pattern={'[a-zA-Z-* *]*.{6,}'}
				/>
				<Input
					type="password"
					id="repeatpassword"
					name="repeatpassword"
					placeholder="Повторите пароль"
					validateInput={validateRepeatpasswordInput}
					isValidInput={isValidRepeatpasswordInput}
					pattern={'[a-zA-Z-* *]*.{6,}'}
				/>
				<Checkbox />
			</div>
			<div className="register__button-container">
				<button className="register__button">Поехали</button>
			</div>
		</form>
	);
};
