import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { TrainingForm } from 'entities/TrainingForm/TrainingForm';
import { useAppSelector } from 'shared/hooks/redux';

export const TrainingPageMobile = () => {
	const userData = useAppSelector((state) => state.user);

	return (
		<>
			<HeaderMain userData={userData} />
			<TextBlock text={'Тренировка'} />
			<TrainingForm />
			<FooterMain
				page={'trainings'}
				withBtn={false}
				btnText={'Запланировать'}
			/>
		</>
	);
};
