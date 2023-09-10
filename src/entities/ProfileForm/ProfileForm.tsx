import { Input } from 'entities/Input/Input';
import React from 'react';
import './index.css';

const ProfileForm = ({
	isInputDisabled,
	handleChangeName,
	handleChangeSecondName,
	handleChangeEmail,
	handleClickSingOut,
	errors,
	name,
	secondName,
	email,
	avatar,
}: {
	isInputDisabled: boolean;
	handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeSecondName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClickSingOut: () => void;
	errors: { name: string; secondName: string; email: string };
	name: string;
	secondName: string;
	email: string;
	avatar: string;
}) => {
	return (
		<div className="profile">
			<form className="profile__input-container">
				{!!avatar ? (
					<img className="profile__avatar" src={avatar} alt="avatar" />
				) : (
					<div className="profile__avatar-box">
						<p className="profile__letter">{name.slice(0, 1)}</p>
					</div>
				)}
				<span className="profile__span profile__span_name">Имя</span>
				<Input
					id="name"
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
					id="secondName"
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
					id="email"
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
				<button className="profile__button" onClick={handleClickSingOut}>
					Выход
				</button>
			</div>
		</div>
	);
};

export default ProfileForm;
