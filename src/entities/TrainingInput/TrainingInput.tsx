import './TrainingInput.css';

type Props = {
	name: string;
	type: string;
	placeholder?: string;
	id: string;
	value: string | number | undefined;
	pattern?: string;
	isValidInput: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// ref?: any;
};

export const TrainingInput = ({
	name,
	type,
	placeholder,
	id,
	value,
	pattern,
	isValidInput,
	setValue, // ref,
}: Props) => {
	return (
		<>
			<input
				required
				type={type}
				name={name}
				value={value}
				id={id}
				className={`training-input__input ${
					name === 'trainingtype' && 'training-input__input_left'
				}`}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e)}
				pattern={pattern}
				placeholder={placeholder}
				// ref={ref}
			/>

			{/* {isValidInput !== '' && (
				<span className="input-block__input-error">{isValidInput}</span>
			)} */}
		</>
	);
};
