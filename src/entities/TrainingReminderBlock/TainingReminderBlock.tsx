import './TrainingReminderBlock.css';

export const TrainingReminderBlock = ({
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
		<label className="training__checkbox-element">
			Напомнить за 1 час
			<input
				type={type}
				id={id}
				name={name}
				className="training__checkbox"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					validateInput(e);
				}}
			/>
			<span className="training__checkmark"></span>
		</label>
	);
};
