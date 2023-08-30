import { TrainingCard } from 'entities/TrainingCard/TrainingCard';
import { useNavigate } from 'react-router-dom';
import styles from './MyTrainings.module.scss';
import { getUserTrainings } from '../../shared/api/training';
import { deleteTraining } from '../../shared/api/training';
import { updateTraining } from '../../shared/api/training';
import React, { useEffect, useState } from 'react';

export const MyTrainings = () => {
	const navigate = useNavigate();

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

	const [items, setItems] = useState([]);
	const [activeButton, setActiveButton] = useState(0);

	let formatterDay = new Intl.DateTimeFormat('ru', {
		month: 'short',
		day: 'numeric',
	});

	let formatterTime = new Intl.DateTimeFormat('ru', {
		hour: 'numeric',
		minute: 'numeric',
	});

	useEffect(() => {
		fetchPlannedTrainings();
	}, []);

	async function fetchPlannedTrainings() {
		try {
			const data = await getUserTrainings();
			let plannedTrainings: any = [];
			data.results.map((training: Training) => {
				let trainingStartTime = new Date(training.started_at).getTime();
				let currentTime = Date.now();
				if (trainingStartTime > currentTime && training.completed === false) {
					plannedTrainings.push(training);
				}
			});
			setActiveButton(0);
			setItems(plannedTrainings);
		} catch (e) {
			console.error(e);
		}
	}

	async function fetchMissedTrainings() {
		try {
			const data = await getUserTrainings();
			let missedTrainings: any = [];
			data.results.map((training: Training) => {
				let trainingStartTime = new Date(training.started_at).getTime();
				let currentTime = Date.now();
				if (trainingStartTime < currentTime && training.completed === false) {
					missedTrainings.push(training);
				}
			});
			setActiveButton(1);
			setItems(missedTrainings);
		} catch (e) {
			console.error(e);
		}
	}

	async function fetchCompletedTrainings() {
		try {
			const data = await getUserTrainings();
			let completedTrainings: any = [];
			data.results.map((training: Training) => {
				if (training.completed === true) {
					completedTrainings.push(training);
				}
			});
			setActiveButton(2);
			setItems(completedTrainings);
		} catch (e) {
			console.error(e);
		}
	}

	const handleDelete = async (id: number) => {
		try {
			await deleteTraining(id);
			if (activeButton === 0) {
				fetchPlannedTrainings();
			} else if (activeButton === 1) {
				fetchMissedTrainings();
			} else {
				fetchCompletedTrainings();
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handleCheck = async (id: number, card: Training) => {
		try {
			card.completed = true;
			await updateTraining(id, card);
			if (activeButton === 0) {
				fetchPlannedTrainings();
			} else if (activeButton === 1) {
				fetchMissedTrainings();
			} else {
				fetchCompletedTrainings();
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className={styles.trainings}>
			<div className={styles.container}>
				<div className={styles.trainings__content}>
					<div className={styles.trainings__status}>
						<button
							className={`${styles.trainings__btn} ${
								activeButton === 0 ? styles.trainings__btn_active : ''
							}`}
							onClick={fetchPlannedTrainings}
						>
							План
						</button>
						<button
							className={`${styles.trainings__btn} ${
								activeButton === 2 ? styles.trainings__btn_active : ''
							}`}
							onClick={fetchCompletedTrainings}
						>
							Выполнено
						</button>
						<button
							className={`${styles.trainings__btn} ${
								activeButton === 1 ? styles.trainings__btn_active : ''
							}`}
							onClick={fetchMissedTrainings}
						>
							Пропущено
						</button>
					</div>
					<div className={styles.trainings__cards}>
						{items.length === 0 && activeButton === 0 ? (
							<div className={styles.trainings__textwrap}>
								<p className={styles.trainings__text}>Пока нет ни одной</p>
								<p className={styles.trainings__text}>будущей тренировки</p>
							</div>
						) : (
							items.map((card: Training) => (
								<TrainingCard
									card={card}
									title={card.training_type}
									key={card.id}
									date={
										formatterDay.format(new Date(card.started_at)).split('.')[0]
									}
									time={formatterTime.format(new Date(card.started_at))}
									distance={`${card.distance} км`}
									reminder={card.reminder}
									handleDelete={handleDelete}
									handleCheck={handleCheck}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
