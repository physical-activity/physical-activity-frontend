import './TrainingCardButton.css';

type Props = {
	type: string;
};

export const TrainingCardButton = ({ type }: Props) => {
	return (
		<button className={`training-card-button training-card-button_${type}`} />
	);
};
