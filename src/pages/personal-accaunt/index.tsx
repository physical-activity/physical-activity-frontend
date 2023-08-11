import FooterMain from 'entities/FooterMain/FooterMain';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import HeaderProfile from 'entities/HeaderProfile/HeaderProfile';
import ProfileForm from 'entities/ProfileForm/ProfileForm';
import { useState, useEffect } from 'react';
import { changeUserInfo } from 'shared/api/changeUserInfo';
import { getUserData } from 'shared/api/getUserData';
import { useFormValidation } from 'shared/hooks/useFormValidation';

export const PersonalAccaunt = () => {
	const [isInputDisabled, setIsInputDisabled] = useState(true);
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('');

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setName(e.target.value);
		console.log(errors);
	};
	const handleChangeSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setSecondName(e.target.value);
		console.log(errors);
	};
	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setEmail(e.target.value);
		console.log(errors);
	};

	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();

	const handleEnableInput = () => {
		setIsInputDisabled(false);
	};

	const saveChanges = async () => {
		if (isValid) {
			setIsInputDisabled(true);
			changeUserInfo(name, secondName, email);
		}
	};

	const [userData, setUserData] = useState({
		first_name: '',
		last_name: '',
		photo: '',
		email: '',
	});

	useEffect(() => {
		const fetchUserData = async () => {
			getUserData().then((res) => setUserData(res));
		};

		if (localStorage.getItem('token')) {
			fetchUserData();
		}
	}, []);

	useEffect(() => {
		setAvatar(userData.photo);
		setName(userData.first_name);
		setSecondName(userData.last_name);
		setEmail(userData.email);
	}, [userData.email, userData.first_name, userData.photo, userData.last_name]);

	return (
		<main className="main">
			<HeaderMain userData={userData} />
			<HeaderProfile
				name="Профиль"
				isButton={true}
				toggleButtonText={isInputDisabled}
				handleEnableInput={handleEnableInput}
				saveChanges={saveChanges}
			/>
			<ProfileForm
				isInputDisabled={isInputDisabled}
				errors={errors}
				name={name}
				secondName={secondName}
				email={email}
				avatar={avatar}
				handleChangeName={handleChangeName}
				handleChangeSecondName={handleChangeSecondName}
				handleChangeEmail={handleChangeEmail}
			/>
			<FooterMain />
		</main>
	);
};
