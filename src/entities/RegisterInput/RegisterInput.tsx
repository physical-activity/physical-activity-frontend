import './RegisterInput.css';
import { useState } from 'react';

export const Input = ({
	type,
	id,
	name,
	placeholder,
	isValidInput,
	validateInput,
}: {
	type: string;
	id: string;
	name: string;
	placeholder: string;
	isValidInput: string;
	validateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="register__input-element">
			<input
				className="register__input"
				type={type}
				id={id}
				name={name}
				value={inputValue ?? ''}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					handleChange(e);
					validateInput(e);
				}}
			/>
			{isValidInput !== '' && (
				<span className="register__error">{isValidInput}</span>
			)}
			<span className="register__placeholder">{placeholder}</span>
		</div>
	);
};
