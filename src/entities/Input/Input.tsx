import { useState } from 'react';
import './Input.css';
import requireSvg from './ic_required_1.svg';
import toggleVisibleImg from './visibility_off_FILL0_wght300_GRAD0_opsz48 1.svg';

export const Input = ({
	name,
	type,
	value,
	placeholder,
	pattern,
	isValidInput,
	setValue,
	disabled,
	required,
	id,
}: {
	name: string;
	type: string;
	id: string;
	value: string;
	placeholder?: string;
	pattern?: string;
	isValidInput?: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	required: boolean;
}) => {
	const [visibility, setVisibility] = useState(type);

	const toggleInputVisibility = () => {
		if (visibility === 'text') {
			setVisibility('password');
		} else {
			setVisibility('text');
		}
	};

	return (
		<div className="input-block">
			<input
				required={required}
				name={name}
				type={visibility}
				value={value}
				disabled={disabled}
				id={id}
				className={`input-block__input ${
					isValidInput && 'input-block__input_error'
				}`}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e)}
				pattern={pattern}
				onBlur={({ target }) => {
					target.value = target.value.trim();
				}}
			/>
			{!value && required && (
				<p className="input-block__input-name">
					{placeholder}{' '}
					<img
						src={requireSvg}
						className="input-block__input-span"
						alt="required"
					/>
				</p>
			)}
			{isValidInput !== '' && (
				<span className="input-block__input-error">{isValidInput}</span>
			)}
			{type === 'password' && (
				<img
					className="input-block__input-hidebutton"
					// src={
					// 	require('./visibility_off_FILL0_wght300_GRAD0_opsz48 1.svg').default
					// }
					src={toggleVisibleImg}
					alt="show/hide password"
					onClick={() => toggleInputVisibility()}
				/>
			)}
		</div>
	);
};
