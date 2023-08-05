import './ActivityBlock.css';

import widthIcon from './icons/width.svg';
import stepsIcon from './icons/steps.svg';
import timerIcon from './icons/timer.svg';

const ActivityBlock = () => {
	return (
		<div className="activityBlock">
			<div className="activityBlock__item">
				<img src={widthIcon} alt="км"></img>
				<span className="activityBlock__counter">0</span>
				<caption className="activityBlock__caption">км</caption>
			</div>
			<div className="activityBlock__item">
				<img src={stepsIcon} alt="км"></img>
				<span className="activityBlock__counter">0</span>
				<caption className="activityBlock__caption">шаг</caption>
			</div>
			<div className="activityBlock__item">
				<img src={timerIcon} alt="км"></img>
				<span className="activityBlock__counter">0</span>
				<caption className="activityBlock__caption">час</caption>
			</div>
		</div>
	);
};

export default ActivityBlock;
