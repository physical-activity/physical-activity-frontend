import { useState } from 'react';

//import './Input.css';
import styles from './Input.module.scss';
import requireSvg from './icons/required.svg';
import hideIcon from './icons/hide-eye.svg';
import showIcon from './icons/show-eye.svg';

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
	isServerError,
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
	isServerError?: boolean;
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
		<div className={styles.input}>
			<input
				required={required}
				name={name}
				type={visibility}
				value={value}
				disabled={disabled}
				id={id}
				className={`${styles.input__input} ${
					(isValidInput || isServerError) && styles.input__error
				}`}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e)}
				pattern={pattern}
				onBlur={({ target }) => {
					target.value = target.value.trim();
				}}
			/>
			{!value && required && (
				<p className={styles.input__name}>
					{placeholder}{' '}
					<img src={requireSvg} className={styles.input__span} alt="required" />
				</p>
			)}
			{isValidInput !== '' && (
				<span className={styles.input__texterror}>{isValidInput}</span>
			)}
			{type === 'password' && (
				<img
					className={styles.input__hidebutton}
					src={visibility === 'password' ? hideIcon : showIcon}
					alt="show/hide password"
					onClick={() => toggleInputVisibility()}
				/>
			)}
		</div>
	);
};
