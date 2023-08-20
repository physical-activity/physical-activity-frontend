import './TrainingCardInfo.css';

type Props = {
	type: string;
	info: string;
	missed: boolean;
};

export const TrainingCardInfo = ({ type, info, missed }: Props) => {
	return (
		<div className="training-card-info">
			<div
				className={`training-card-info__pic ${
					missed
						? `training-card-info__pic_${type}-missed`
						: `training-card-info__pic_${type}`
				}`}
			></div>
			<p className="training-card-info__text">{info}</p>
		</div>
	);
};
