import './index.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'shared/hooks/redux';
import { getUserTrainingsFromDate } from '../../shared/api/training';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import FooterMain from 'entities/FooterMain/FooterMain';
import runningIcon from './icons/running.svg';
import walkingIcon from './icons/walking.svg';
import bikingIcon from './icons/biking.svg';
import timeIcon from './icons/time.svg';
import distanceIcon from './icons/distance.svg';
import StatisticsPopup from 'entities/StatisticsPopup/StatisticsPopup';

export const Statistics = () => {
	type Training = {
		id: number;
		author: string;
		training_type: string;
		started_at: string;
		finished_at: string;
		distance: number;
		steps_num: number;
		completed: boolean;
		reminder: boolean;
		rating: number;
	};

	const userData = useAppSelector((state) => state.user);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [items, setItems] = useState<Training[]>([]);
	const [period, setPeriod] = useState('day');
	const [totalDistance, setTotalDistance] = useState(0);
	const [walkDistance, setWalkDistance] = useState(0);
	const [runDistance, setRunDistance] = useState(0);
	const [bikeDistance, setBikeDistance] = useState(0);
	const [walkDuration, setWalkDuration] = useState('0:00');
	const [runDuration, setRunDuration] = useState('0:00');
	const [bikeDuration, setBikeDuration] = useState('0:00');
	const [totalDuration, setTotalDuration] = useState('0:00');
	const [stepsNumber, setStepsNumber] = useState(0);

	function getTodayDate() {
		const now = new Date();

		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate()
		).toISOString();
	}

	function getWeekAgoDate() {
		const now = new Date();

		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - 7
		).toISOString();
	}

	function getMonthAgoDate() {
		const now = new Date();

		return new Date(
			now.getFullYear(),
			now.getMonth() - 1,
			now.getDate()
		).toISOString();
	}

	function selectFromDate() {
		let fromDate: string = '';
		if (period === 'day') {
			fromDate = getTodayDate();
		} else if (period === 'week') {
			fromDate = getWeekAgoDate();
		} else if (period === 'month') {
			fromDate = getMonthAgoDate();
		}
		return fromDate;
	}

	async function fetchTrainings() {
		try {
			let fromDate: string = selectFromDate();
			const data = await getUserTrainingsFromDate(fromDate);
			let completedTrainings: Training[] = [];
			data.results.map((training: Training) => {
				if (training.completed === true) {
					completedTrainings.push(training);
				}
			});
			setItems(completedTrainings);
		} catch (e) {
			console.error(e);
		}
	}

	function getStepsNumber() {
		let stepsNumber: number = 0;
		items.map((training: Training) => {
			stepsNumber += training.steps_num;
		});
		setStepsNumber(stepsNumber);
	}

	function getTotalDistance() {
		let totalDistance: number = 0;
		items.map((training: Training) => {
			totalDistance += training.distance;
		});
		setTotalDistance(totalDistance);
	}

	function getWalkDistance() {
		let walkDistance: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Ходьба') {
				walkDistance += training.distance;
			}
		});
		setWalkDistance(walkDistance);
	}

	function getRunDistance() {
		let runDistance: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Бег') {
				runDistance += training.distance;
			}
		});
		setRunDistance(runDistance);
	}

	function getBikeDistance() {
		let bikeDistance: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Велопрогулка') {
				bikeDistance += training.distance;
			}
		});
		setBikeDistance(bikeDistance);
	}

	function convertMsToString(milliseconds: number) {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);

		seconds = seconds % 60;
		minutes = minutes % 60;

		return `${hours}:${minutes.toString().padStart(2, '0')}`;
	}

	function getTotalDuration() {
		let totalDuration: number = 0;
		items.map((training: Training) => {
			let TrainingDuration: number =
				new Date(training.finished_at).getTime() -
				new Date(training.started_at).getTime();
			totalDuration += TrainingDuration;
		});
		setTotalDuration(convertMsToString(totalDuration));
	}

	function getWalkDuration() {
		let walkDuration: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Ходьба') {
				let TrainingDuration: number =
					new Date(training.finished_at).getTime() -
					new Date(training.started_at).getTime();
				walkDuration += TrainingDuration;
			}
		});
		setWalkDuration(convertMsToString(walkDuration));
	}

	function getRunDuration() {
		let runDuration: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Бег') {
				let TrainingDuration: number =
					new Date(training.finished_at).getTime() -
					new Date(training.started_at).getTime();
				runDuration += TrainingDuration;
			}
		});
		setRunDuration(convertMsToString(runDuration));
	}

	function getBikeDuration() {
		let bikeDuration: number = 0;
		items.map((training: Training) => {
			if (training.training_type === 'Велопрогулка') {
				let TrainingDuration: number =
					new Date(training.finished_at).getTime() -
					new Date(training.started_at).getTime();
				bikeDuration += TrainingDuration;
			}
		});
		setBikeDuration(convertMsToString(bikeDuration));
	}

	useEffect(() => {
		fetchTrainings();
	}, []);

	useEffect(() => {
		fetchTrainings();
	}, [period]);

	useEffect(() => {
		getTotalDistance();
		getWalkDistance();
		getRunDistance();
		getBikeDistance();
		getTotalDuration();
		getWalkDuration();
		getRunDuration();
		getBikeDuration();
		getStepsNumber();
	}, [items]);

	const handlePopupOpen = () => {
		setIsPopupOpen(true);
	};

	const handlePopupClose = () => {
		setIsPopupOpen(false);
	};

	const handlePeriodPick = (period: string) => {
		setPeriod(period);
		setIsPopupOpen(false);
	};

	return (
		<div>
			<HeaderMain userData={userData} />
			<main className="statistics">
				<section className="statistics__switcher">
					<h2 className="statistics__switcher-header">Статистика</h2>
					<div className="statistics__navigation" onClick={handlePopupOpen}>
						<h3 className="statistics__navigation-header">
							{period === 'day'
								? 'Сегодня'
								: period === 'week'
								? 'За неделю'
								: 'За месяц'}
						</h3>
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
								<span className="statistics__activity-number">
									{walkDistance}
								</span>{' '}
								км
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
								<span className="statistics__activity-number">
									{runDistance}
								</span>{' '}
								км
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
								<span className="statistics__activity-number">
									{bikeDistance}
								</span>{' '}
								км
							</p>
						</div>
					</div>
				</section>
				<section className="statistics__records">
					<div className="statistics__records-time">
						<img
							src={timeIcon}
							className="statistics__records-img statistics__records-img_bottom"
							alt="Training"
						/>
						<div className="statistics__records-item">
							<h4 className="statistics__item-header">Общая длительность</h4>
							<p className="statistics__records-item-data">
								<span className="statistics__records-number">
									{totalDuration}
								</span>
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
								<span className="statistics__records-number">
									{totalDistance}
								</span>{' '}
								км
							</p>
						</div>
					</div>
				</section>
				<section className="statistics__types">
					<div className="statistics__type">
						<h3 className="statistics__type-header">Ходьба</h3>
						<div className="statistics__type-block">
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Длительность</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">
										{walkDuration}
									</span>
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">
										{walkDistance}
									</span>{' '}
									км
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Шагов</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{stepsNumber}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="statistics__type">
						<h3 className="statistics__type-header">Бег</h3>
						<div className="statistics__type-block">
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Длительность</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{runDuration}</span>
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">{runDistance}</span>{' '}
									км
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
								<h4 className="statistics__item-header">Длительность</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">
										{bikeDuration}
									</span>
								</p>
							</div>
							<div className="statistics__type-item">
								<h4 className="statistics__item-header">Дистанция</h4>
								<p className="statistics__type-data">
									<span className="statistics__type-number">
										{bikeDistance}
									</span>{' '}
									км
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
			<StatisticsPopup
				isOpen={isPopupOpen}
				onClose={handlePopupClose}
				period={period}
				onPeriodPick={handlePeriodPick}
			/>
		</div>
	);
};
