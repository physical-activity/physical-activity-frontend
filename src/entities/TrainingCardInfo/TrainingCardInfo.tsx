import './TrainingCardInfo.css';

type Props = {
	type: string;
	info: string;
};

export const TrainingCardInfo = ({ type, info }: Props) => {
	return (
		<div className="training-card-info">
			<div
				className={`training-card-info__pic training-card-info__pic_${type}`}
			></div>
			<p className="training-card-info__text">{info}</p>
		</div>
	);
};
