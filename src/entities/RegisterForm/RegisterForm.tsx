import './RegisterForm.css';
import { Input } from '../RegisterInput/RegisterInput';
import { Checkbox } from '../RegisterCheckbox/RegisterCheckbox';

export const RegisterForm = () => {
	return (
		<form className="register__form">
			<div className="register__input-container">
				<Input />
				<Input />
				<Input />
				<Input />
				<Checkbox />
			</div>
			<div className="register__button-container">
				<button className="register__button">Поехали</button>
			</div>
		</form>
	);
};
