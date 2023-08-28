import './index.css';
import { useState } from 'react';
import { useAppSelector } from 'shared/hooks/redux';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import FooterMain from 'entities/FooterMain/FooterMain';
import runningIcon from './icons/running.svg';
import walkingIcon from './icons/walking.svg';
import bikingIcon from './icons/biking.svg';
import trainingIcon from './icons/training.svg';
import timeIcon from './icons/time.svg';
import distanceIcon from './icons/distance.svg';
import StatisticsPopup from 'entities/StatisticsPopup/StatisticsPopup';

export const Statistics = () => {
	const userData = useAppSelector((state) => state.user);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupOpen = () => {
		setIsPopupOpen(true);
	};

	const handlePopupClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<div>
			<HeaderMain userData={userData} />
			<main className="statistics">
				<section className="statistics__switcher">
					<h2 className="statistics__switcher-header">Статистика</h2>
					<div className="statistics__navigation" onClick={handlePopupOpen}>
						<h3 className="statistics__navigation-header">Сегодня</h3>
						<button className="statistics__navigation-button" type="button" />
					</div>
				</section>
				<section className="statistics__activity">
					<h3 className="statistics__activity-header">Активность</h3>
					<div className="statistics__activity-block">
						<div className="statistics__activity-item">
							<img
								src={walkingIcon}
								alt=""
								className="statistics__activity-img"
							/>
							<h4 className="statistics__activity-subheader">Ходьба</h4>
							<p className="statistics__activity-data">
								<span className="statistics__activity-number">{6}</span> км
							</p>
						</div>
						<div className="statistics__activity-item">
							<img
								src={runningIcon}
								alt=""
								className="statistics__activity-img"
							/>
							<h4 className="statistics__activity-subheader">Бег</h4>
							<p className="statistics__activity-data">
								<span className="statistics__activity-number">{11}</span> км
							</p>
						</div>
						<div className="statistics__activity-item">
							<img
								src={bikingIcon}
								alt=""
								className="statistics__activity-img"
							/>
							<h4 className="statistics__activity-subheader">Вело</h4>
							<p className="statistics__activity-data">
								<span className="statistics__activity-number">{22}</span> км
							</p>
						</div>
					</div>
				</section>
				<section className="statistics__records">
					<div className="statistics__records-streak">
						<img
							src={trainingIcon}
							className="statistics__records-img"
							alt="Training"
						/>
						<div className="statistics__records-item statistics__records-item_left">
							<h4 className="statistics__item-header">Без пропусков</h4>
							<p className="statistics__records-item-data">
								<span className="statistics__records-number">{37}</span> дней
							</p>
						</div>
						<div className="statistics__records-item statistics__records-item_right">
							<h4 className="statistics__item-header">Рекорд</h4>
							<p className="statistics__records-item-data">
								<span className="statistics__records-number">{54}</span> дня
							</p>
						</div>
					</div>
					<div className="statistics__records-time">
						<img
							src={timeIcon}
							className="statistics__records-img statistics__records-img_bottom"
							alt="Training"
						/>
						<div className="statistics__records-item">
							<h4 className="statistics__item-header">Общее время</h4>
							<p className="statistics__records-item-data">
								<span className="statistics__records-number">{4}</span> ч{' '}
								<span className="statistics__records-number">{45}</span> мин
							</p>
						</div>
					</div>
					<div className="statistics__records-distance">
						<img
							src={distanceIcon}
							className="statistics__records-img statistics__records-img_bottom"
							alt="Training"
						/>
						<div className="statistics__records-item">
							<h4 className="statistics__item-header">Общая дистанция</h4>
							<p className="statistics__records-item-data">
								<span className="statistics__records-number">{18}</span> км
							</p>
						</div>
					</div>
				</section>
				<section className="statistics__types">
					<div className="statistics__type">
						<h3 className="statistics__type-header">Ходьба</h3>
						<div className="statistics__type-block">
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Время</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{1}</span> ч{' '}
									<span className="statistics__type-number">{35}</span> мин
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{6}</span> км
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Шагов</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{7200}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="statistics__type">
						<h3 className="statistics__type-header">Бег</h3>
						<div className="statistics__type-block">
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Время</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{1}</span> ч{' '}
									<span className="statistics__type-number">{35}</span> мин
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{6}</span> км
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">{!true && 'Шагов'}</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="statistics__type">
						<h3 className="statistics__type-header">Вело</h3>
						<div className="statistics__type-block">
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Время</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{1}</span> ч{' '}
									<span className="statistics__type-number">{35}</span> мин
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{6}</span> км
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">{!true && 'Шагов'}</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{}</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<FooterMain page={'statistics'} withBtn={false} />
			<StatisticsPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
		</div>
	);
};
