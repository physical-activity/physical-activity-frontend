import './index.css';

import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import BtnBlock from 'entities/BtnBlock/BtnBlock';
import ActivityBlock from 'entities/ActivityBllock/ActivityBlock';
import WorkoutBlock from 'entities/WorkoutBlock/WorkoutBlock';
import FooterMain from 'entities/FooterMain/FooterMain';

export const HomePageMobile = () => {
	return (
		<div className="page-container">
			<HeaderMain />
			<main>
				<TextBlock text={'активность'} />
				<ActivityBlock />
				<TextBlock text={'тренировки'} />
				<WorkoutBlock />
				<BtnBlock text={'тренироваться'} />
			</main>
			<FooterMain />
		</div>
	);
};
