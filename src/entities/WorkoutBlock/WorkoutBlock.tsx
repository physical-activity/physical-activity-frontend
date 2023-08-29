import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import styles from './WorkoutBlock.module.scss';

import arrowBtnIcon from './icons/arrowBtn.svg';

export const WorkoutBlock = () => {
	const navigate = useNavigate();
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token ? setIsToken(true) : setIsToken(false);
	}, []);

	return (
		<section className={styles.workout}>
			<div className={`${styles.container} ${styles.pb24}`}>
				<div className={styles.workout__content}>
					<div className={styles.workout__header}>
						<div className={styles.workout__titlewrap}>
							<h3 className={styles.workout__title}>Тренировки</h3>
						</div>
						<div className={styles.workout__bg}>
							<picture>
								<source
									srcSet="/images/run_background.webp, images/run_background@2x.webp 2x"
									type="image/webp"
								/>
								<img
									className={styles.workout__bgimg}
									src="images/run_background.png"
									srcSet="images/run_background.png, images/run_background@2x.png 2x"
									alt="Фоновая картинка"
								/>
							</picture>
						</div>
					</div>
					<div className={styles.workout__btns}>
						<button
							className={styles.workout__item}
							onClick={() => {
								isToken ? navigate('/training') : navigate('/signin');
							}}
						>
							<div className={styles.workout__imgwrap}>
								<picture>
									<source
										srcSet="/images/hp_walk.webp, images/hp_walk@2x.webp 2x"
										type="image/webp"
									/>
									<img
										className={styles.workout__img}
										src="images/hp_walk.png"
										srcSet="images/hp_walk.png, images/hp_walk@2x.png 2x"
										alt="Ходьба"
									/>
								</picture>
							</div>
							<div className={styles.workout__btncaption}>
								<span className={styles.workout__text}>Ходьба</span>
								<img src={arrowBtnIcon} alt="" />
							</div>
						</button>
						<button
							className={styles.workout__item}
							onClick={() => {
								isToken ? navigate('/training') : navigate('/signin');
							}}
						>
							<div className={styles.workout__imgwrap}>
								<picture>
									<source
										srcSet="/images/hp_run.webp, images/hp_run@2x.webp 2x"
										type="image/webp"
									/>
									<img
										className={styles.workout__bgimg}
										src="images/hp_run.png"
										srcSet="images/hp_run.png, images/hp_run@2x.png 2x"
										alt="Бег"
									/>
								</picture>
							</div>
							<div className={styles.workout__btncaption}>
								<span className={styles.workout__text}>Бег</span>
								<img src={arrowBtnIcon} alt="" />
							</div>
						</button>
						<button
							className={styles.workout__item}
							onClick={() => {
								isToken ? navigate('/training') : navigate('/signin');
							}}
						>
							<div className={styles.workout__imgwrap}>
								<picture>
									<source
										srcSet="/images/hp_bike.webp, images/hp_bike@2x.webp 2x"
										type="image/webp"
									/>
									<img
										className={styles.workout__bgimg}
										src="images/hp_bike.png"
										srcSet="images/hp_bike.png, images/hp_bike@2x.png 2x"
										alt="Вело"
									/>
								</picture>
							</div>
							<div className={styles.workout__btncaption}>
								<span className={styles.workout__text}>Вело</span>
								<img src={arrowBtnIcon} alt="" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
