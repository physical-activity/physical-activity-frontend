import './TrainingCardButton.css';

type Props = {
	type: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	missed: boolean;
};

export const TrainingCardButton = ({ type, handleClick, missed }: Props) => {
	return (
		<button
			className={`training-card-button ${
				missed && type !== 'edit'
					? `training-card-button training-card-button_${type}-missed`
					: `training-card-button training-card-button_${type}`
			}`}
			onClick={handleClick}
			disabled={missed && type === 'check' ? true : false}
		/>
	);
};
