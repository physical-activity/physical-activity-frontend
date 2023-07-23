import { useState } from 'react';
import './Input.css';


export const Input = ({
	name,
	type,
	value,
	placeholder,
	pattern,
	isValidInput,
	setValue,

}: {
	name: string;
	type: string;
	value: string;
	placeholder: string;
	pattern?: string;
	isValidInput: string
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
		<div className="signin__input-block">
			<input
				required
				name={name}
				type={visibility}
				value={value}
				className={`signin__input ${isValidInput && 'signin__input_error'}`}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e)}
				pattern={pattern}
			/>
			{!value && (
				<p className="signin__input-name">
					{placeholder}{' '}
					<img
						src={require('./ic_required_1.svg').default}
						className="signin__input-span"
						alt="required"
					/>
				</p>
			)}
			{isValidInput!=='' && (
				<span className="signin__input-error">{isValidInput}</span> 
			)}
			{type === 'password' && (
				<img
					className="signin__input-hidebutton"
					src={
						require('./visibility_off_FILL0_wght300_GRAD0_opsz48 1.svg').default
					}
					alt="show/hide password"
					onClick={() => toggleInputVisibility()}
				/>
			)}
		</div>
	);
};
