import './RegisterInput.css';

export const Input = () => {
	return (
		<div className="register__input-element">
			<input className="register__input" />
			<span className="register__error">Ошибка</span>
			<span className="register__placeholder">Ваше имя</span>
		</div>
	);
};
