import styles from './ActivityBlock.module.scss';

import widthIcon from './icons/width.svg';
import stepsIcon from './icons/steps.svg';
import timerIcon from './icons/timer.svg';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { useEffect } from 'react';
import {
	getActivityDistance,
	getActivityDuration,
	getActivitySteps,
} from 'store/reducers/activitySlice';

const ActivityBlock = () => {
	const dispatch = useAppDispatch();

	const activity = useAppSelector((state) => state.activity);
	useEffect(() => {
		dispatch(getActivitySteps())
			.unwrap()
			.catch((err) => console.log(err));
		dispatch(getActivityDistance())
			.unwrap()
			.catch((err) => console.log(err));
		dispatch(getActivityDuration())
			.unwrap()
			.catch((err) => console.log(err));
	}, [dispatch]);

	return (
		<section className={styles.activity}>
			<div className={`${styles.container} ${styles.pb24} ${styles.pt24}`}>
				<div className={styles.activity__content}>
					<h3 className={styles.activity__header}>Активность</h3>
					<div className={styles.activity__info}>
						<div className={styles.activity__item}>
							<h4 className={styles.activity__subtitle}>Дистанция</h4>
							<img src={widthIcon} alt="" />
							<p className={styles.activity__data}>
								<span className={styles.activity__number}>
									{(activity.distance / 1000).toString().slice(0, 3)}
								</span>{' '}
								км
							</p>
						</div>
						<div className={styles.activity__item}>
							<h4 className={styles.activity__subtitle}>Шаги</h4>
							<img src={stepsIcon} alt="" />
							<p className={styles.activity__data}>
								<span className={styles.activity__number}>
									{activity.steps}
								</span>
							</p>
						</div>
						<div className={styles.activity__item}>
							<h4 className={styles.activity__subtitle}>Длительность</h4>
							<img src={timerIcon} alt="" />
							<p className={styles.activity__data}>
								<span className={styles.activity__number}>
									{'0' +
										Math.floor(activity.duration / 60)
											.toString()
											.slice(-2)}{' '}
									: {'0' + (activity.duration % 60)}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActivityBlock;
