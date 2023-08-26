import './index.css';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import BtnBlock from 'entities/BtnBlock/BtnBlock';
import ActivityBlock from 'entities/ActivityBllock/ActivityBlock';
import WorkoutBlock from 'entities/WorkoutBlock/WorkoutBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { useAppSelector } from 'shared/hooks/redux';
import { useEffect, useState } from 'react';
import TrainRemainder from 'entities/TrainRemainder/TrainRemainder';
import { Training } from 'shared/utils/types';
import { getUserTrainings } from 'shared/api/training';

export const HomePageMobile = () => {
	const userData = useAppSelector((state) => state.user);

	const token = localStorage.getItem('token');

	const [training, setTraining] = useState([]);

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
				let delta = trainingStartTime - currentTime;
				if (
					training.reminder === true &&
					training.completed === false &&
					delta > 0 &&
					delta < 3600000
				) {
					plannedTrainings.push(training);
				}
			});
			setTraining(plannedTrainings);
			//console.log('planndeTrainings', plannedTrainings);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className="main">
			<HeaderMain userData={userData} />
			<div className="page-container">
				<TextBlock text={'активность'} />
				<ActivityBlock />
				<TextBlock text={'тренировки'} />
				{training.length !== 0 ? (
					<>
						<div className="train-remainder__wrap">
							{training.map((card: Training) => (
								<TrainRemainder trainingCard={card} />
							))}
						</div>
					</>
				) : null}
				<WorkoutBlock />
				<BtnBlock text={token !== null ? 'тренироваться' : 'присоединиться'} />
			</div>
			<FooterMain page={'main'} />
		</main>
	);
};
