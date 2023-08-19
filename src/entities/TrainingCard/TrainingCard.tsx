import './TrainingCard.css';
import { TrainingCardButton } from '../TrainingCardButton/TrainingCardButton';
import { TrainingCardInfo } from '../TrainingCardInfo/TrainingCardInfo';

type Props = {
	card: {
		id: number;
		author: string;
		training_type: string;
		started_at: Date;
		finished_at: string;
		distance: number;
		steps_num: number;
		completed: boolean;
		reminder: boolean;
	};
	title: string;
	key: number;
	date: string;
	time: string;
	distance: string;
	reminder: boolean;
	handleDelete: (key: number) => void;
};

export const TrainingCard = ({
	card,
	title,
	date,
	time,
	distance,
	reminder,
	handleDelete,
}: Props) => {
	function handleDeleteClick() {
		handleDelete(card.id);
	}

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
				<TrainingCardButton type={'delete'} handleClick={handleDeleteClick} />
				<TrainingCardButton
					type={'check'}
					handleClick={() => console.log(card.id)}
				/>
				<TrainingCardButton
					type={'edit'}
					handleClick={() => console.log(card.id)}
				/>
			</div>
		</div>
	);
};
