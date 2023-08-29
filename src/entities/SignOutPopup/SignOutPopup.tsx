import styles from './SignOutPopup.module.scss';

import { useNavigate } from 'react-router';
import { useAppDispatch } from 'shared/hooks/redux';
import { clearUserData } from 'store/reducers/userSlice';
export const SignOutPopup = ({
	isPopupOpen,
	handleClickSingOut,
}: {
	isPopupOpen: boolean;
	handleClickSingOut: () => void;
}) => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('google_access_token');
		dispatch(
			clearUserData({
				user: {
					first_name: '',
					second_name: '',
					phone: '',
					email: '',
					photo: '',
				},
				id: null,
				auth_token: null,
				isLoading: false,
				error: '',
			})
		);
		navigate('/');
	};

	return (
		<div className={`popup ${isPopupOpen && 'popup_open'}`}>
			<div className={styles.signout}>
				<h2 className={styles.signout__title}>внимание</h2>
				<p className={styles.signout__text}>
					Вы точно хотите выйти из аккаунта? (ваши данные сохранятся)
				</p>
				<div className={styles.signout__btns}>
					<button className={styles.signout__btn} onClick={handleClickSingOut}>
						Назад
					</button>
					<button
						className={`${styles.signout__btn} ${styles.signout__btn__accent}`}
						onClick={handleLogout}
					>
						Выход
					</button>
				</div>
			</div>
		</div>
	);
};
