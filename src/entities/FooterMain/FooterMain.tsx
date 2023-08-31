import { useNavigate } from 'react-router';

import styles from './FooterMain.module.scss';

import homeIcon from './icons/home.svg';
import homeIconInactive from './icons/homeInactive.svg';
import workoutIcon from './icons/workout.svg';
import workoutIconInactive from './icons/workoutInactive.svg';
import statsIcon from './icons/stats.svg';
import statsIconInactive from './icons/statsInactive.svg';

import { useAppSelector } from 'shared/hooks/redux';
import { BtnBlock } from 'entities/BtnBlock/BtnBlock';

type Props = {
	page: string;
	withBtn?: boolean;
	btnText: string;
	handleClick?: () => void;
};

const FooterMain = ({ page, withBtn, btnText, handleClick }: Props) => {
	const navigate = useNavigate();

	const token = useAppSelector((state) => state.user.auth_token);
	const localToken = localStorage.getItem('token');

	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				{withBtn === true ? (
					<BtnBlock text={btnText} handleClick={handleClick} />
				) : null}

				<div className={styles.footer__wrap}>
					<button
						className={styles.footer__item}
						onClick={() => {
							navigate('/');
						}}
					>
						<img src={page === 'main' ? homeIcon : homeIconInactive}></img>
						<caption
							className={
								page === 'main'
									? `${styles.footer__text_active}`
									: `${styles.footer__text}`
							}
						>
							Главная
						</caption>
					</button>
					<button
						className={styles.footer__item}
						onClick={() => {
							token || localToken
								? navigate('/my-trainings')
								: navigate('/signin');
						}}
					>
						<img
							src={page === 'trainings' ? workoutIcon : workoutIconInactive}
						></img>
						<caption
							className={
								page === 'trainings'
									? `${styles.footer__text_active}`
									: `${styles.footer__text}`
							}
						>
							Тренировки
						</caption>
					</button>
					<button
						className={styles.footer__item}
						onClick={() => {
							token || localToken
								? navigate('/statistics')
								: navigate('/signin');
						}}
					>
						<img
							src={page === 'statistics' ? statsIcon : statsIconInactive}
						></img>
						<caption
							className={
								page === 'statistics'
									? `${styles.footer__text_active}`
									: `${styles.footer__text}`
							}
						>
							Статистика
						</caption>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FooterMain;
