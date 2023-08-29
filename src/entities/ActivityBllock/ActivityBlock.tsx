import './ActivityBlock.css';

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
	}, []);

	return (
		<div className="activityBlock">
			<div className="activityBlock__item">
				<img src={widthIcon} alt="км"></img>
				<span className="activityBlock__counter">
					{activity.distance / 1000}
				</span>
				<caption className="activityBlock__caption">км</caption>
			</div>
			<div className="activityBlock__item">
				<img src={stepsIcon} alt="км"></img>
				<span className="activityBlock__counter">{activity.steps}</span>
				<caption className="activityBlock__caption">шаг</caption>
			</div>
			<div className="activityBlock__item">
				<img src={timerIcon} alt="км"></img>
				<span className="activityBlock__counter">{activity.duration / 60}</span>
				<caption className="activityBlock__caption">час</caption>
			</div>
		</div>
	);
};

export default ActivityBlock;
