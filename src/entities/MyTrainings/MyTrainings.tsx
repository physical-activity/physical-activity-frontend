import { TrainingCard } from 'entities/TrainingCard/TrainingCard';
import { useNavigate } from 'react-router-dom';
import './MyTrainings.css';
import { getUserTrainings } from '../../shared/api/training';
import { deleteTraining } from '../../shared/api/training';
import React, { useEffect, useState } from 'react';

export const MyTrainings = () => {
	const navigate = useNavigate();

	type Training = {
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

	// Training:
	//     type: object
	//     properties:
	//       id:
	//         type: integer
	//         readOnly: true
	//       author:
	//         $ref: '#/components/schemas/Email'
	//       training_type:
	//         $ref: '#/components/schemas/TrainingType'
	//       started_at:
	//         $ref: '#/components/schemas/TrainingTime'
	//       finished_at:
	//         $ref: '#/components/schemas/TrainingTime'
	//       distance:
	//         $ref: '#/components/schemas/Distance'
	//       steps_num:
	//         $ref: '#/components/schemas/StepsNum'
	//       completed:
	//         type: boolean
	//         description: 'Завершение тренировки'
	//         example: true
	//       reminder:
	//         type: boolean
	//         description: 'Напоминание о тренировке'
	//         example: false
	//       rating:
	//         $ref: '#/components/schemas/Rating'
	//     required:
	//       - id
	//       - author
	//       - training_type
	//       - started_at

	const [items, setItems] = useState([]);

	let formatterDay = new Intl.DateTimeFormat('ru', {
		month: 'short',
		day: 'numeric',
	});

	let formatterTime = new Intl.DateTimeFormat('ru', {
		hour: 'numeric',
		minute: 'numeric',
	});

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getUserTrainings();
				console.log(data.results);
				setItems(data.results);
			} catch (e) {
				console.error(e);
			}
		}
		fetchData();
	}, []);

	const handleDelete = async (id: number) => {
		try {
			await deleteTraining(id);
			const data = await getUserTrainings();
			setItems(data.results);
			console.log(data.results);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="my-trainings">
			<div className="my-trainings__status">
				<button className="my-trainings__status-button_active">План</button>
				<button className="my-trainings__status-button">Пропущено</button>
				<button className="my-trainings__status-button">Выполнено</button>
			</div>
			<div className="my-trainings__container">
				<div className="my-trainings__card-container">
					{items.map((card: Training) => (
						<TrainingCard
							card={card}
							title={card.training_type}
							key={card.id}
							date={
								formatterDay.format(new Date(card.started_at)).split('.')[0]
							}
							time={formatterTime.format(new Date(card.started_at))}
							// time={`${new Date(card.started_at).getHours()}:${new Date(card.started_at).getMinutes()}`}
							distance={`${card.distance} км`}
							reminder={card.reminder}
							handleDelete={handleDelete}
						/>
					))}
				</div>
				<button
					className={`my-trainings__button`}
					onClick={() => navigate('/training')}
				>
					Создать
				</button>
			</div>
		</div>
	);
};
