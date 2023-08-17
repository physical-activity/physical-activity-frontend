import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './WorkoutBlock.css';

import arrowIcon from './icons/arrow.svg';

const WorkoutBlock = () => {
	const navigate = useNavigate();
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token ? setIsToken(true) : setIsToken(false);
	}, []);

	return (
		<div className="workoutBlock">
			<div className="workoutBlock__info">
				<p className="workoutBlock__text">ходьба</p>
				<img src={arrowIcon} alt="Стрелка" />
			</div>
			<button
				onClick={() => {
					isToken ? navigate('/training') : navigate('/register');
				}}
				className="workoutBlock__img-container"
			>
				<img
					src="/images/walk.png"
					alt="Ходьба"
					className="workoutBlock__img"
				/>
			</button>

			<div className="workoutBlock__info">
				<p className="workoutBlock__text">бег</p>
				<img src={arrowIcon} alt="Стрелка" />
			</div>
			<button
				onClick={() => {
					isToken ? navigate('/training') : navigate('/register');
				}}
				className="workoutBlock__img-container"
			>
				<img src="/images/run.png" alt="Бег" className="workoutBlock__img" />
			</button>
			<div className="workoutBlock__info">
				<div>
					<p className="workoutBlock__text">вело</p>
					<p className="workoutBlock__text">прогулка</p>
				</div>
				<img src={arrowIcon} alt="Стрелка" />
			</div>
			<button
				onClick={() => {
					isToken ? navigate('/training') : navigate('/register');
				}}
				className="workoutBlock__img-container"
			>
				<img
					src="/images/bike.png"
					alt="Велосипед"
					className="workoutBlock__img"
				/>
			</button>
		</div>
	);
};

export default WorkoutBlock;
