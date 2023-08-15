import './index.css';

import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';

import FooterMain from 'entities/FooterMain/FooterMain';
import { TrainingForm } from 'entities/TrainingForm/TrainingForm';

export const TrainingPageMobile = () => {
	return (
		<div className="page-container">
			<HeaderMain />
			<main>
				<TextBlock text={'тренировка'} />
				<TrainingForm />
			</main>
			<FooterMain />
		</div>
	);
};
