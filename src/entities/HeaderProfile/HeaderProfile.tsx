import '../Header/Header.css';
import './HeaderProfile.css';

const HeaderProfile = ({
	name,
	isButton,
	toggleButtonText,
	handleEnableInput,
	saveChanges,
}: {
	name: string;
	isButton: boolean;
	toggleButtonText?: boolean;
	handleEnableInput: () => void;
	saveChanges: () => void;
}) => {
	return (
		<div className="header-profile">
			<h2 className="header-profile__title">{name}</h2>
			{toggleButtonText ? (
				<button className="header__button" onClick={() => handleEnableInput()}>
					Редактировать
				</button>
			) : (
				<button className="header__button" onClick={() => saveChanges()}>
					Сохранить
				</button>
			)}
		</div>
	);
};

export default HeaderProfile;
