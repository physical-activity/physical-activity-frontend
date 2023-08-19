import './TrainingCardButton.css';

type Props = {
	type: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const TrainingCardButton = ({ type, handleClick }: Props) => {
	return (
		<button
			className={`training-card-button training-card-button_${type}`}
			onClick={handleClick}
		/>
	);
};
