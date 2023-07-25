import './RegisterCheckbox.css';

export const Checkbox = () => {
	return (
		<div className="register__checkbox-element">
			<input type="checkbox" className="register__checkbox" required />
			<span className="register__checkbox-desc">
				Я принимаю «Условия использования» и «Политику конфиденциальности»
			</span>
		</div>
	);
};
