import './index.css';
import { useState, useEffect } from 'react';
import HeaderMain from 'entities/HeaderMain/HeaderMain';
import TextBlock from 'entities/TextBlock/TextBlock';
import BtnBlock from 'entities/BtnBlock/BtnBlock';
import ActivityBlock from 'entities/ActivityBllock/ActivityBlock';
import WorkoutBlock from 'entities/WorkoutBlock/WorkoutBlock';
import FooterMain from 'entities/FooterMain/FooterMain';
import { getUserData } from 'shared/api/getUserData';
import { useNavigate } from 'react-router';

export const HomePageMobile = () => {
	const [userData, setUserData] = useState({ first_name: '', photo: '' });
	const navigate = useNavigate();
	useEffect(() => {
		const fetchUserData = async () => {
			getUserData()
				.then((res) => {
					setUserData(res);
				})
				.catch((err) => {
					localStorage.removeItem('token');
					navigate('/');
				});
		};
		if (localStorage.getItem('token')) {
			fetchUserData();
		}
	}, []);

	return (
		<div className="page-container">
			<HeaderMain userData={userData} />
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
