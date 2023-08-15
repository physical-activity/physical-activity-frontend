import FooterMain from 'entities/FooterMain/FooterMain';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import HeaderProfile from 'entities/HeaderProfile/HeaderProfile';
import ProfileForm from 'entities/ProfileForm/ProfileForm';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { changeUserInfo } from 'store/reducers/userSlice';

export const PersonalAccaunt = () => {
	const userData = useAppSelector((state) => state.user);
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

	const dispatch = useAppDispatch();

	const saveChanges = async () => {
		if (isValid) {
			setIsInputDisabled(true);
			// changeUserInfo(name, secondName, email);
			dispatch(changeUserInfo({ name, secondName, email }));
		}
	};

	// const [userData, setUserData] = useState({
	// 	first_name: '',
	// 	last_name: '',
	// 	photo: '',
	// 	email: '',
	// });

	// useEffect(() => {
	// 	const fetchUserData = async () => {
	// 		getUserData().then((res) => setUserData(res));
	// 	};

	// 	if (localStorage.getItem('token')) {
	// 		fetchUserData();
	// 	}
	// }, []);

	useEffect(() => {
		setAvatar(userData.user.photo);
		setName(userData.user.first_name);
		setSecondName(userData.user.second_name);
		setEmail(userData.user.email);
	}, [
		userData.user.email,
		userData.user.first_name,
		userData.user.photo,
		userData.user.second_name,
	]);

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
