import './TrainingCard.css';
import { useNavigate } from 'react-router'; // добавлено
import { TrainingCardButton } from '../TrainingCardButton/TrainingCardButton';
import { TrainingCardInfo } from '../TrainingCardInfo/TrainingCardInfo';
import React, { useEffect, useState } from 'react';

type Training = {
	id: number;
	author: string;
	training_type: string;
	started_at: string;
	finished_at: string;
	distance: number;
	steps_num: number;
	completed: boolean;
	reminder: boolean;
	rating: number;
};

type Props = {
	card: {
		id: number;
		author: string;
		training_type: string;
		started_at: string;
		finished_at: string;
		distance: number;
		steps_num: number;
		completed: boolean;
		reminder: boolean;
		rating: number;
	};
	title: string;
	key: number;
	date: string;
	time: string;
	distance: string;
	reminder: boolean;
	handleDelete: (key: number) => void;
	handleCheck: (key: number, card: Training) => void;
};

export const TrainingCard = ({
	card,
	title,
	date,
	time,
	distance,
	reminder,
	handleDelete,
	handleCheck,
}: Props) => {
	const navigate = useNavigate(); // добавлено
	const [missed, setMissed] = useState(false);
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		let trainingStartTime = new Date(card.started_at).getTime();
		let currentTime = Date.now();
		if (trainingStartTime < currentTime) {
			setMissed(true);
		}
		if (card.completed === true) {
			setCompleted(true);
		}
	}, []);

	function handleDeleteClick() {
		handleDelete(card.id);
	}

	function handleCheckClick() {
		handleCheck(card.id, card);
	}

	function handleEditClick() {
		// функция добавлена
		navigate('/training-update', { state: { id: card.id, card: card } });
		console.log(card.id);
	}

	return (
		<div className="training-card">
			<div className="training-card__container">
				<p
					className={`training-card__title ${
						missed ? 'training-card__title_missed' : ''
					}`}
				>
					{title}
				</p>
				<div
					className={`training-card__reminder 
						${reminder ? 'training-card__reminder_active' : ''}
						${missed ? 'training-card__reminder_missed' : ''}
						${completed ? 'training-card__reminder_missed' : ''}
					`}
				></div>
			</div>
			<div
				className={`training-card__info-container
					${missed ? 'training-card__info-container_missed' : ''}
					${completed ? 'training-card__info-container_completed' : ''}
				`}
			>
				<TrainingCardInfo type={'date'} info={date} missed={missed} />
				<TrainingCardInfo type={'time'} info={time} missed={missed} />
				<TrainingCardInfo type={'distance'} info={distance} missed={missed} />
			</div>
			{!completed && (
				<div className="training-card__container">
					<TrainingCardButton
						type={'delete'}
						handleClick={handleDeleteClick}
						missed={missed}
					/>
					<TrainingCardButton
						type={'check'}
						handleClick={handleCheckClick}
						missed={missed}
					/>
					<TrainingCardButton
						type={'edit'}
						handleClick={handleEditClick} // добавлено
						missed={missed}
					/>
				</div>
			)}
		</div>
	);
};
