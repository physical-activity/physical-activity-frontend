import styles from './ActivityBlock.module.scss';

import widthIcon from './icons/width.svg';
import stepsIcon from './icons/steps.svg';
import timerIcon from './icons/timer.svg';

const ActivityBlock = () => {
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
								<span className={styles.activity__number}>{0}</span> км
							</p>
						</div>
						<div className={styles.activity__item}>
							<h4 className={styles.activity__subtitle}>Шаги</h4>
							<img src={stepsIcon} alt="" />
							<p className={styles.activity__data}>
								<span className={styles.activity__number}>{0}</span>
							</p>
						</div>
						<div className={styles.activity__item}>
							<h4 className={styles.activity__subtitle}>Длительность</h4>
							<img src={timerIcon} alt="" />
							<p className={styles.activity__data}>
								<span className={styles.activity__number}>00:00</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActivityBlock;
