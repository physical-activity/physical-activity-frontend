import { Input } from 'entities/Input/Input';
import React, { useState, useEffect } from 'react';

import './index.css';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { error } from 'console';
import { Secondary } from 'stories/Button.stories';
const ProfileForm = ({
	isInputDisabled,
	handleChange,
	errors,
}: {
	isInputDisabled: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errors: { name: string; secondName: string; email: string };
	// error: Object
}) => {
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('Влад');
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('qwe@qwe.com');

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setName(e.target.value);
		// console.log(errors);
	};
	const handleChangeSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setSecondName(e.target.value);
		// console.log(errors);
	};
	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setEmail(e.target.value);
		// console.log(errors);
	};

	const handleLogout = () => {
		// удаляем токен юзера с локалстореджа
	};

	return (
		<div className="profile">
			<form className="profile__input-container">
				{avatar !== '' ? (
					<img className="profile__avatar" src={avatar} alt="avatar" />
				) : (
					<div className="profile__avatar-box">
						<p className="profile__letter">B</p>
					</div>
				)}
				<span className="profile__span profile__span_name">Имя</span>
				<Input
					name="name"
					type="text"
					value={name}
					setValue={handleChangeName}
					disabled={isInputDisabled}
					required={true}
					pattern="[A-Za-zА-Яа-я\s\-]{2,}"
					isValidInput={errors.name}
				/>
				<span className="profile__span profile__span_secondname">Фамилия</span>
				<Input
					name="secondName"
					type="text"
					value={secondName}
					setValue={handleChangeSecondName}
					required={false}
					disabled={isInputDisabled}
					pattern="[A-Za-zА-Яа-я\s\-]{2,}"
					isValidInput={errors.secondName}
				/>
				<span className="profile__span profile__span_email">Email</span>
				<Input
					name="email"
					type="text"
					value={email}
					setValue={handleChangeEmail}
					disabled={isInputDisabled}
					required={true}
					pattern="[a-zA-Z0-9\-\.]+[\@][a-zA-Z0-9\-]+[\.][a-zA-Z0-9\.]{2,}"
					isValidInput={errors.email}
				/>
			</form>
			<div className="profile__button-container">
				<button className="profile__button" onClick={() => handleLogout()}>
					Выход
				</button>
			</div>
		</div>
	);
};

export default ProfileForm;
