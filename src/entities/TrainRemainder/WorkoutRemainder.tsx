import styles from './WorkoutRemainder.module.scss';
import { useState, useEffect } from 'react';

import bellIcon from './icons/bell.svg';
import walkingIcon from './icons/walking.svg';
import runingIcon from './icons/runing.svg';
import bikingIcon from './icons/biking.svg';

import { getRemainingTimeMsTimestamp } from 'shared/utils/countdownTimer';
import { Training } from 'shared/utils/types';

type Props = {
	trainingCard: Training;
};

const defaultRamainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};

export const WorkoutRemainder = ({ trainingCard }: Props) => {
	const countdownTimestampMs = new Date(trainingCard.started_at).getTime();

	const [remainingTime, setRemainingTime] = useState(defaultRamainingTime);

	function updateRemainingTime(countdown: number) {
		setRemainingTime(getRemainingTimeMsTimestamp(countdown));
	}

	useEffect(() => {
		const interval = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(interval);
	}, [countdownTimestampMs]);

	return (
		<div className={styles.remainder}>
			<div className={styles.container}>
				<div className={styles.remainder__wrap}>
					<img src={bellIcon} alt="часы"></img>
					<div className={styles.remainder__content}>
						<div className={styles.remainder__item}>
							<h4 className={styles.remainder__title}>Тренировка</h4>
							<div className={styles.remainder__workout}>
								{(trainingCard.training_type === 'Бег' && (
									<img src={runingIcon}></img>
								)) ||
									(trainingCard.training_type === 'Велопрогулка' && (
										<img src={bikingIcon}></img>
									)) ||
									(trainingCard.training_type === 'Ходьба' && (
										<img src={walkingIcon}></img>
									))}
								<p className={styles.remainder__text}>
									{(trainingCard.training_type === 'Бег' && 'Бег') ||
										(trainingCard.training_type === 'Велопрогулка' && 'Вело') ||
										(trainingCard.training_type === 'Ходьба' && 'Ходьба')}
								</p>
							</div>
						</div>
						<div className={styles.remainder__item}>
							<h4 className={styles.remainder__title}>Дистанция</h4>
							<div>
								<span className={styles.remainder__text}>
									{trainingCard.distance}
								</span>
								<span className={styles.remainder__dist}>{` км`}</span>
							</div>
						</div>
						<div className={styles.remainder__item}>
							<h4 className={styles.remainder__title}>Через</h4>
							<div className={styles.remainder__time}>
								<span>{remainingTime.hours}</span>
								<span>:</span>
								<span>{remainingTime.minutes}</span>
								<span>:</span>
								<span>{remainingTime.seconds}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
