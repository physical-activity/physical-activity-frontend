import FooterMain from 'entities/FooterMain/FooterMain';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import HeaderProfile from 'entities/HeaderProfile/HeaderProfile';
import ProfileForm from 'entities/ProfileForm/ProfileForm';
import { useState } from 'react';
import { useFormValidation } from 'shared/hooks/useFormValidation';

export const PersonalAccaunt = () => {
	const [isInputDisabled, setIsInputDisabled] = useState(true);

	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();

	const handleEnableInput = () => {
		setIsInputDisabled(false);
	};

	const saveChanges = () => {
		if (isValid) {
			setIsInputDisabled(true);
			// POST METHOD
		}
	};

	return (
		<main className="main">
			<HeaderMain />
			<HeaderProfile
				name="Профиль"
				isButton={true}
				toggleButtonText={isInputDisabled}
				handleEnableInput={handleEnableInput}
				saveChanges={saveChanges}
			/>
			<ProfileForm
				isInputDisabled={isInputDisabled}
				handleChange={handleChange}
				errors={errors}
			/>
			<FooterMain />
		</main>
	);
};
