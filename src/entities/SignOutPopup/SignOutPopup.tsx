import React from 'react';
import './signoutpopup.css';
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
			<div className="signout-container">
				<h1 className="signout__title">внимание</h1>
				<div className="signout__text-container">
					<p className="signout__text">
						Вы точно хотите выйти из аккаунта? (ваши данные сохранятся)
					</p>
				</div>
				<div className="signout__buttons-container">
					<button
						className="signout__button signout__button_green"
						onClick={handleClickSingOut}
					>
						назад
					</button>
					<button
						className="signout__button signout__button_gray"
						onClick={handleLogout}
					>
						выход
					</button>
				</div>
			</div>
		</div>
	);
};
