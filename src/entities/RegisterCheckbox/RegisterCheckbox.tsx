import './RegisterCheckbox.css';

export const Checkbox = ({
	type,
	id,
	name,
	validateInput,
}: {
	type: string;
	id: string;
	name: string;
	validateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<div className="register__checkbox-element">
			<input
				type={type}
				id={id}
				name={name}
				className="register__checkbox"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					validateInput(e);
				}}
				required
			/>
			<span className="register__checkbox-desc">
				Я принимаю «Условия использования» и «Политику конфиденциальности»
			</span>
		</div>
	);
};
