import styles from './TrainingCard.module.scss';
import { TrainingCardButton } from '../TrainingCardButton/TrainingCardButton';
import { TrainingCardInfo } from '../TrainingCardInfo/TrainingCardInfo';
import React, { useEffect, useState } from 'react';

import bikingIcon from './icons/biking.svg';
import runningIcon from './icons/running.svg';
import walkingIcon from './icons/walking.svg';
import bellIcon from './icons/bell.svg';
import bellActiveIcon from './icons/bellActive.svg';
import { formatTime, handleISODate } from 'shared/utils/handleDate';

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

	return (
		<div className={styles.trainingcard}>
			<div className={styles.trainingcard__header}>
				<div className={styles.trainingcard__typewrap}>
					{title === 'Бег' ? (
						<img src={runningIcon}></img>
					) : title === 'Ходьба' ? (
						<img src={walkingIcon}></img>
					) : title === 'Велопрогулка' ? (
						<img src={bikingIcon}></img>
					) : null}
					<p
						className={`${styles.trainingcard__title} ${
							missed ? styles.trainingcard__title_missed : ''
						}`}
					>
						{title === 'Велопрогулка' ? 'Вело' : title}
					</p>
				</div>
				{completed ? null : missed ? null : reminder ? (
					<img src={bellActiveIcon} alt="" />
				) : (
					<img src={bellIcon} alt="" />
				)}
			</div>
			<div
				className={`${styles.trainingcard__info}
					${missed ? styles.trainingcard__info_missed : ''}
					${completed ? styles.trainingcard__info_completed : ''}
				`}
			>
				<TrainingCardInfo type={'date'} info={date} missed={missed} />
				<TrainingCardInfo
					type={completed ? 'timer' : 'time'}
					info={time}
					missed={missed}
				/>
				<TrainingCardInfo type={'distance'} info={distance} missed={missed} />
			</div>
			{!completed && (
				<div className={styles.trainingcard__btns}>
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
						handleClick={() => console.log(card.id)}
						missed={missed}
					/>
				</div>
			)}
		</div>
	);
};
