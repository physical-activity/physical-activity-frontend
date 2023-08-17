import './index.css';

import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { useAppSelector } from 'shared/hooks/redux';
import { MyTrainings } from 'entities/MyTrainings/MyTrainings';

export const MyTrainingsPageMobile = () => {
	const userData = useAppSelector((state) => state.user);

	return (
		<div className="page-container">
			<HeaderMain userData={userData} />
			<TextBlock text={'мои тренировки'} />
			<MyTrainings />
			<FooterMain />
		</div>
	);
};
