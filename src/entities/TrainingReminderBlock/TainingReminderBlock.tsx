import './TrainingReminderBlock.css';
import bell from './Bell.svg';

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
		<div className="training__checkbox-element">
			<img src={bell} className="training__checkbox-bell" />
			<p className="training__checkbox-text">Напомнить за 1 час</p>
			<div className="training__checkbox_wrapper">
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
			</div>
		</div>
	);
};
