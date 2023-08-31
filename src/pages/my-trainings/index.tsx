import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { useAppSelector } from 'shared/hooks/redux';
import { MyTrainings } from 'entities/MyTrainings/MyTrainings';
import { useNavigate } from 'react-router';

export const MyTrainingsPageMobile = () => {
	const navigate = useNavigate();
	const userData = useAppSelector((state) => state.user);

	const handleNavigate = () => {
		navigate('/training');
	};

	return (
		<>
			<HeaderMain userData={userData} />
			<TextBlock text={'Мои тренировки'} />
			<MyTrainings />
			<FooterMain
				page={'trainings'}
				withBtn={true}
				btnText={'Создать'}
				handleClick={handleNavigate}
			/>
		</>
	);
};
