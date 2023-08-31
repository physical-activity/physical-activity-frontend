import './index.css';

import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { TrainingUpdateForm } from 'entities/TrainingUpdateForm/TrainingUpdateForm';
import { useAppSelector } from 'shared/hooks/redux';
import { useLocation } from 'react-router-dom';

export const TrainingUpdatePageMobile = () => {
	const userData = useAppSelector((state) => state.user);

	const location = useLocation();

	return (
		<div className="page-container">
			<HeaderMain userData={userData} />
			<TextBlock text={'тренировка'} />
			<TrainingUpdateForm id={location.state.id} card={location.state.card} />
			<FooterMain
				page={'trainings'}
				withBtn={false}
				btnText={'Запланировать'}
			/>
		</div>
	);
};
