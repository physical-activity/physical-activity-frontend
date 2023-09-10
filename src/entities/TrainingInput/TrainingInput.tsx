import './TrainingInput.css';

type Props = {
	name: string;
	type: string;
	placeholder?: string;
	id: string;
	value: string | number | undefined;
	pattern?: string;
	required?: boolean;
	isReadOnly?: boolean;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TrainingInput = ({
	name,
	type,
	placeholder,
	id,
	value,
	pattern,
	required,
	setValue,
	isReadOnly,
}: Props) => {
	return (
		<>
			<input
				type={type}
				name={name}
				value={value}
				id={id}
				className="training-input__input"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e)}
				pattern={pattern}
				placeholder={placeholder}
				required={required}
				readOnly={isReadOnly}
			/>
		</>
	);
};
