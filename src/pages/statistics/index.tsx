import './index.css';
import { useAppSelector } from 'shared/hooks/redux';
import HeaderStatistics from 'entities/HeaderStatistics/HeaderStatistics';
import FooterStatistics from 'entities/FooterStatistics/FooterStatistics';
import runningIcon from './icons/running.svg';
import walkingIcon from './icons/walking.svg';
import bikingIcon from './icons/biking.svg';
import trainingIcon from './icons/training.svg';
import timeIcon from './icons/time.svg';
import distanceIcon from './icons/distance.svg';

export const Statistics = () => {
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
	// const [allTrainings, setAllTrainings] = useState([]);
	// const [currentStreak, setCurrentStreak] = useState(0);

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
			console.log(fromDate);
		} else if (period === 'week') {
			fromDate = getWeekAgoDate();
			console.log(fromDate);
		} else if (period === 'month') {
			fromDate = getMonthAgoDate();
			console.log(fromDate);
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
		// getAllTrainings();
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
		// currentStreakCount();
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

	// async function getAllTrainings() {
	// 	try {
	// 		const data = await getUserTrainings();
	// 		let completedTrainings: any = [];
	// 		data.results.map((training: Training) => {
	// 			if (training.completed === true) {
	// 				completedTrainings.push(training);
	// 			}
	// 		});
	// 		console.log(completedTrainings);
	// 		setAllTrainings(completedTrainings);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }

	// function currentStreakCount() {
	// 	let datesArr: any = [];
	// 	allTrainings.map((training: Training) => {
	// 		datesArr.push({date: training.started_at});
	// 	});
	// 	datesArr.sort();
	// 	console.log(datesArr);
	// 	let count = 0
	// 	datesArr.reverse().forEach((el: any, i: any) => {
	// 		if (new Date().setUTCHours(0,0,0,0) - new Date(el.date).setUTCHours(0,0,0,0) === i * 86400000) count++
	// 	})
	// 	setCurrentStreak(count);
	// 	console.log(count);
	// }
  
	return (
		<div>
			<HeaderStatistics userData={userData} />
			<main className="statistics">
				<section className="statistics__switcher">
					<h2 className="statistics__switcher-header">Статистика</h2>
					<div className="statistics__navigation">
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
			<FooterMain
				page={'statistics'}
				withBtn={false}
				btnText={'Тренироваться'}
			/>
			<StatisticsPopup
				isOpen={isPopupOpen}
				onClose={handlePopupClose}
				period={period}
				onPeriodPick={handlePeriodPick}
			/>
		</div>
	);
};
