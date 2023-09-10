import { useNavigate } from 'react-router';

import './FooterStatistics.css';

import homeIcon from './icons/home.svg';
import homeIconInactive from './icons/homeInactive.svg';
import workoutIcon from './icons/workout.svg';
import workoutIconInactive from './icons/workoutInactive.svg';
import statsIcon from './icons/stats.svg';
import statsIconInactive from './icons/statsInactive.svg';

type Props = {
	page: string;
};

const FooterStatistics = ({ page }: Props) => {
	const navigate = useNavigate();

	return (
		<div className="footer-stats">
			<button
				className="footer-stats__item"
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={page === 'main' ? homeIcon : homeIconInactive}></img>
				<caption>Главная</caption>
			</button>
			<button
				className="footer-stats__item"
				onClick={() => {
					navigate('/my-trainings');
				}}
			>
				<img
					src={page === 'trainings' ? workoutIcon : workoutIconInactive}
				></img>
				<caption>Тренировки</caption>
			</button>
			<button
				className="footer-stats__item"
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={page === 'statistics' ? statsIcon : statsIconInactive}></img>
				<caption>Статистика</caption>
			</button>
		</div>
	);
};

export default FooterStatistics;
