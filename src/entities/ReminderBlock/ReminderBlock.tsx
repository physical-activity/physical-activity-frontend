import './ReminderBlock.css';

export const ReminderBlock = ({
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
		<label className="register__checkbox-element">
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
			<span className="register__checkmark"></span>
			<span className="register__checkbox-desc">
				Я принимаю{' '}
				<a
					href="#"
					target="_blank"
					rel="noreferrer noopener"
					className="register__checkbox-link"
				>
					«Условия использования»
				</a>{' '}
				и
				<a
					href="#"
					target="_blank"
					rel="noreferrer noopener"
					className="register__checkbox-link"
				>
					{' '}
					«Политику конфиденциальности»
				</a>
			</span>
		</label>
	);
};
