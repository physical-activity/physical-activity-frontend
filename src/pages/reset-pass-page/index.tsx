import { useState } from 'react';
import Header from 'entities/Header/Header';
import { ResetPassworForm } from 'entities/Reset-password-form';
import closePopup from './X.svg';
import './index.css';
import { useNavigate } from 'react-router';
export const ResetPasswordPage = ({
	setIsPopupOpen,
}: {
	setIsPopupOpen: (arg: boolean) => void;
}) => {
	const [isRequsetMade, setIsRequsetMade] = useState(false);
	const [emailValue, setEmailValue] = useState('');
	const navigate = useNavigate();
	return (
		<div className="reset-pass">
			<div className="reset-pass-heading">
				<h2 className="reset-pass-title">Восстановление пароля</h2>
				<img src={closePopup} onClick={() => setIsPopupOpen(false)} />
			</div>
			{!isRequsetMade ? (
				<>
					<p className="reset-pass-text">
						Введите электронную почту привязанную к вашему аккаунту.
					</p>
					<ResetPassworForm
						setIsRequsetMade={setIsRequsetMade}
						setEmailValue={setEmailValue}
						emailValue={emailValue}
					/>
				</>
			) : (
				<>
					<div className="main__reset-block">
						<p className="reset-block__message">
							На вашу почту отправлено письмо с ссылкой для восстановления
							пароля.
						</p>
						<button className="reset-button-back" onClick={() => navigate('/')}>
							Вернуть на главную
						</button>
					</div>
				</>
			)}
		</div>
	);
};
