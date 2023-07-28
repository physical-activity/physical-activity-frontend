import './RegisterInput.css';
import { useState } from 'react';

export const Input = ({
	type,
	id,
	name,
	placeholder,
	isValidInput,
	validateInput,
	pattern,
	value,
}: {
	type: string;
	id: string;
	name: string;
	placeholder: string;
	isValidInput: string;
	validateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	pattern?: string;
	value: string;
}) => {
	const [visibilityType, setVisibilityType] = useState(type);

	function togglePasswordVisibility() {
		if (visibilityType === 'password') {
			setVisibilityType('text');
		} else {
			setVisibilityType('password');
		}
	}

	return (
		<div className="register__input-element">
			<input
				className={`register__input ${
					isValidInput !== '' && 'register__input_error'
				}`}
				type={visibilityType}
				id={id}
				name={name}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					validateInput(e);
				}}
				pattern={pattern}
				required
			/>
			{isValidInput !== '' && (
				<span className="register__error">{isValidInput}</span>
			)}
			{value === '' && (
				<span className="register__placeholder">
					{placeholder}
					<img
						src={require('./required.svg').default}
						className="register__placeholder-img"
						alt="required"
					/>
				</span>
			)}
			{type === 'password' && (
				<img
					src={require('./visibility.svg').default}
					className="register__visibility-img"
					alt="visibility"
					onClick={() => togglePasswordVisibility()}
				/>
			)}
		</div>
	);
};
