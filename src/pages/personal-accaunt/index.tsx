import styles from './personal-accaunt.module.scss';

import FooterMain from 'entities/FooterMain/FooterMain';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import HeaderProfile from 'entities/HeaderProfile/HeaderProfile';
import ProfileForm from 'entities/ProfileForm/ProfileForm';
import { SignOutPopup } from 'entities/SignOutPopup/SignOutPopup';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { changeUserInfo } from 'store/reducers/userSlice';
import { Profile } from 'entities/Profile/Profile';

export const PersonalAccaunt = () => {
	const userData = useAppSelector((state) => state.user);
	const [isInputDisabled, setIsInputDisabled] = useState(true);
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('');
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setName(e.target.value);
	};
	const handleChangeSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setSecondName(e.target.value);
	};
	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		setEmail(e.target.value);
	};

	const { handleChange, errors, isValid } = useFormValidation();

	const handleEnableInput = () => {
		setIsInputDisabled(false);
	};

	const dispatch = useAppDispatch();

	const saveChanges = async () => {
		console.log('save');
		console.log('isValid', isValid);
		if (!isValid) {
			setIsInputDisabled(true);
			console.log(setIsInputDisabled);
			// changeUserInfo(name, secondName, email);
			dispatch(changeUserInfo({ name, secondName, email }));
		}
	};

	const handleClickSingOut = () => {
		setIsPopupOpen((state) => !state);
	};

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
		<div className={styles.wrapper}>
			<main className={styles.main}>
				<Profile
					isInputDisabled={isInputDisabled}
					errors={errors}
					name={name}
					secondName={secondName}
					email={email}
					avatar={avatar}
					handleChangeName={handleChangeName}
					handleChangeSecondName={handleChangeSecondName}
					toggleButtonText={isInputDisabled}
					handleEnableInput={handleEnableInput}
					saveChanges={saveChanges}
				/>
				<SignOutPopup
					isPopupOpen={isPopupOpen}
					handleClickSingOut={handleClickSingOut}
				/>
			</main>
			<FooterMain
				page={'main'}
				withBtn={true}
				btnText={'Выйти из аккаунта'}
				handleClick={handleClickSingOut}
			/>
		</div>
	);
};

/*

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
					handleClickSingOut={handleClickSingOut}
				/>

*/
