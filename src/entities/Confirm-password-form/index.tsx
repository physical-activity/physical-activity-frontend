import { useState, useEffect } from 'react';
import './index.css';
import { Input } from 'entities/Input/Input';
import { useFormValidation } from 'shared/hooks/useFormValidation';
import { REGEX } from 'shared/utils/constants';
import { useAppDispatch } from 'shared/hooks/redux';
import { resetUserPassword } from 'store/reducers/userSlice';
import { useNavigate, useParams } from 'react-router';

export const ConfirmPasswordForm = () => {
	const [isValid, setIsvalid] = useState(true);
	const [passValue, setPassValue] = useState('');
	const [repeatPassValue, setRepeatPassValue] = useState('');
	const [isIdentical, setIsIdentical] = useState(passValue === repeatPassValue);
	const formValidator = useFormValidation();
	const dispatch = useAppDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassValue(e.target.value);
		formValidator.handleChange(e);
	};

	const handleChangePasswordRepeat = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setRepeatPassValue(e.target.value);
		formValidator.handleChange(e);
	};

	const dataToSend = {
		new_password: passValue,
		uid: params.uid!,
		token: params.token!,
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(resetUserPassword(dataToSend))
			.then(() => navigate('/'))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		setIsvalid(formValidator.isValid);
		setIsIdentical(passValue === repeatPassValue);
	}, [passValue, repeatPassValue, formValidator.isValid]);

	return (
		<form className="form__form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form__input-container form__input-container_reset-pass">
				<Input
					required={true}
					id="password"
					placeholder={'Пароль'}
					name={'password'}
					type={'password'}
					value={passValue}
					setValue={handleChangePassword}
					pattern={REGEX.password.source}
					isValidInput={formValidator.errors.password}
				/>
				<Input
					required={true}
					id="secondPassword"
					placeholder={'Пароль'}
					name={'secondPassword'}
					type={'password'}
					value={repeatPassValue}
					setValue={handleChangePasswordRepeat}
					pattern={REGEX.password.source}
					isValidInput={formValidator.errors.secondPassword}
				/>
				{!isIdentical && (
					<span className="form__server-error">Пароли различаются</span>
				)}
			</div>
			<div className="form__button-continer form__button-continer_reset-pass">
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
