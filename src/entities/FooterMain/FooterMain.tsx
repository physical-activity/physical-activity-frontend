import { useNavigate } from 'react-router';

import './FooterMain.css';

import homeIcon from './icons/home.svg';
import workoutIcon from './icons/workout.svg';
import settingsIcon from './icons/settings.svg';

const FooterMain = () => {
	const navigate = useNavigate();

	return (
		<div className="footer-main">
			<button
				className="footer-main__item"
				onClick={() => {
					navigate('/');
				}}
			>
				<img src={homeIcon}></img>
				<caption>Главная</caption>
			</button>
			<button
				className="footer-main__item"
				onClick={() => {
					navigate('/register');
				}}
			>
				<img src={workoutIcon}></img>
				<caption>Тренировки</caption>
			</button>
			<button
				className="footer-main__item"
				onClick={() => {
					navigate('/register');
				}}
			>
				<img src={settingsIcon}></img>
				<caption>Настройки</caption>
			</button>
		</div>
	);
};

export default FooterMain;
