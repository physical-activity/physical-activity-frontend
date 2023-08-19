import './TrainingCard.css';
import { TrainingCardButton } from '../TrainingCardButton/TrainingCardButton';
import { TrainingCardInfo } from '../TrainingCardInfo/TrainingCardInfo';

type Props = {
	title: string;
	date: string;
	time: string;
	distance: string;
	reminder: boolean;
};

export const TrainingCard = ({
	title,
	date,
	time,
	distance,
	reminder,
}: Props) => {
	return (
		<div className="training-card">
			<div className="training-card__container">
				<p className={`training-card__title`}>{title}</p>
				<div
					className={`training-card__reminder ${
						reminder ? 'training-card__reminder_active' : ''
					}`}
				></div>
			</div>
			<div className="training-card__container">
				<TrainingCardInfo type={'date'} info={date} />
				<TrainingCardInfo type={'time'} info={time} />
				<TrainingCardInfo type={'distance'} info={distance} />
			</div>
			<div className="training-card__container">
				<TrainingCardButton type={'delete'} />
				<TrainingCardButton type={'check'} />
				<TrainingCardButton type={'edit'} />
			</div>
		</div>
	);
};
