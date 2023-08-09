import { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
// import './index.css';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { resetPassword } from 'shared/api/resetpass';

export const ResetPassworForm = ({
	setIsRequsetMade,
	setEmailValue,
	emailValue,
}: {
	setIsRequsetMade: (arg: boolean) => void;
	setEmailValue: (arg: string) => void;
	emailValue: string;
}) => {
	const [isValid, setIsvalid] = useState(true);

	const formValidator = useFormValidation();

	const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
		formValidator.handleChange(e);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		resetPassword(emailValue).then(() => setIsRequsetMade(true));
	};

	useEffect(() => {
		setIsvalid(formValidator.isValid);
		console.log(formValidator.errors);
	}, [emailValue, formValidator.isValid]);

	return (
		<form className="form__form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form__input-container form__input-container_reset-pass">
				<Input
					id="email"
					placeholder={'Почта'}
					name={'email'}
					type={'text'}
					value={emailValue}
					setValue={handleChangeEmail}
					pattern="[a-zA-Z0-9\-\.]+[\@][a-zA-Z0-9\-]+[\.][a-zA-Z0-9\.]{2,}"
					isValidInput={formValidator.errors.email}
				/>
			</div>
			<div className="form__button-continer">
				<button
					className={`form__button ${!isValid && 'form__button_unvalid'}`}
					disabled={!isValid}
					type="submit"
				>
					Далее
				</button>
			</div>
		</form>
	);
};
