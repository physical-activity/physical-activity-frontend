import './index.css';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import BtnBlock from 'entities/BtnBlock/BtnBlock';
import ActivityBlock from 'entities/ActivityBllock/ActivityBlock';
import WorkoutBlock from 'entities/WorkoutBlock/WorkoutBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { useAppSelector } from 'shared/hooks/redux';

export const HomePageMobile = () => {
	const userData = useAppSelector((state) => state.user);

	return (
		<main className="main">
			<HeaderMain userData={userData} />
			<div className="page-container">
				<TextBlock text={'активность'} />
				<ActivityBlock />
				<TextBlock text={'тренировки'} />
				<WorkoutBlock />
				<BtnBlock text={'тренироваться'} />
			</div>
			<FooterMain page={'main'} />
		</main>
	);
};
