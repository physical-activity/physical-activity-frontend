import './TrainRemainder.css';
import { useState, useEffect } from 'react';

import timerIcon from './icons/timer.svg';
import routeIcon from './icons/route.svg';
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

const TrainRemainder = ({ trainingCard }: Props) => {
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
		<div className="trainRemainder">
			<h2 className="trainremainder__title">{trainingCard.training_type}</h2>
			<div className="trainRemainder__content">
				<div className="trainREmainder__item">
					<img src={timerIcon} alt="clock"></img>
					<span className="trainRemainder__text">{remainingTime.hours}</span>
					<span className="trainRemainder__text">:</span>
					<span className="trainRemainder__text">{remainingTime.minutes}</span>
					<span className="trainRemainder__text">:</span>
					<span className="trainRemainder__text">{remainingTime.seconds}</span>
				</div>
				<div className="trainREmainder__item">
					<img src={routeIcon} alt="route"></img>
					<span className="trainRemainder__text">
						{trainingCard.distance} км
					</span>
				</div>
			</div>
		</div>
	);
};

export default TrainRemainder;
