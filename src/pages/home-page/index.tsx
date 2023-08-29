import styles from './index.module.scss';

import HeaderMain from 'entities/HeaderMain/HeaderMain';
import ActivityBlock from 'entities/ActivityBllock/ActivityBlock';
import { WorkoutBlock } from 'entities/WorkoutBlock/WorkoutBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { useAppSelector } from 'shared/hooks/redux';
import { useEffect, useState } from 'react';
import { WorkoutRemainder } from 'entities/TrainRemainder/WorkoutRemainder';
import { Training } from 'shared/utils/types';
import { getUserTrainings } from 'shared/api/training';
import { useNavigate } from 'react-router';

export const HomePageMobile = () => {
	const navigate = useNavigate();
	const userData = useAppSelector((state) => state.user);
	const token = useAppSelector((state) => state.user.auth_token);
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		token ? setIsToken(true) : setIsToken(false);
	}, [token]);

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
		<div className={styles.wrapper}>
			<HeaderMain userData={userData} />
			<main className={styles.main}>
				<ActivityBlock />
				{training.length !== 0 ? (
					<div className={styles.reminder__wrap}>
						{training.map((card: Training) => (
							<WorkoutRemainder trainingCard={card} />
						))}
					</div>
				) : null}
				<WorkoutBlock />
			</main>
			<FooterMain
				page={'main'}
				withBtn={true}
				btnText={token == null ? 'Присоединиться' : 'Тренироваться'}
				handleClick={() => {
					isToken ? navigate('/training') : navigate('/signin');
				}}
			/>
		</div>
	);
};
