import { useNavigate } from 'react-router';

import './FooterMain.css';

import homeIcon from './icons/home.svg';
import homeIconInactive from './icons/homeInactive.svg';
import workoutIcon from './icons/workout.svg';
import workoutIconInactive from './icons/workoutInactive.svg';
import statsIconInactive from './icons/statInactive.svg';
import { useAppSelector } from 'shared/hooks/redux';

type Props = {
	page: string;
};

const FooterMain = ({ page }: Props) => {
	const navigate = useNavigate();

	const token = useAppSelector((state) => state.user.auth_token);

	return (
		<div className="footer-main">
			<button
				className="footer-main__item"
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={page === 'main' ? homeIcon : homeIconInactive}></img>
				<caption>Главная</caption>
			</button>
			<button
				className="footer-main__item"
				onClick={() => {
					token ? navigate('/my-trainings') : navigate('/signin');
				}}
			>
				<img
					src={page === 'trainings' ? workoutIcon : workoutIconInactive}
				></img>
				<caption>Тренировки</caption>
			</button>
			<button
				className="footer-main__item"
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={statsIconInactive}></img>
				<caption>Статистика</caption>
			</button>
		</div>
	);
};

export default FooterMain;
