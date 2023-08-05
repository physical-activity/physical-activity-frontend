import './RegisterErrorPopup.css';
import { useNavigate } from 'react-router-dom';

export const RegisterErrorPopup = ({
	isOpen,
	email,
}: {
	isOpen: boolean;
	email: string;
}) => {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/signin');
	}

	return (
		<div className={`popup ${isOpen ? 'popup_open' : ''}`}>
			<div className="popup__container">
				<div className="popup__header">
					<h2 className="popup__header-title">Внимание</h2>
				</div>
				<div className="popup__message-block">
					<p className="popup__message">
						Аккаунт с почтой «{email}» уже зарегистрирован
					</p>
				</div>
				<div className="popup__button-container">
					<button className="popup__button" onClick={handleClick}>
						Войти
					</button>
				</div>
			</div>
		</div>
	);
};
