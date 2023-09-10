import styles from './HeaderProfile.module.scss';

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
		<div className={styles.header}>
			<h2 className={styles.header__title}>{name}</h2>
			{toggleButtonText ? (
				<button
					className={styles.header__btn}
					onClick={() => handleEnableInput()}
				>
					Редактировать
				</button>
			) : (
				<button className={styles.header__btn} onClick={() => saveChanges()}>
					Сохранить
				</button>
			)}
		</div>
	);
};

export default HeaderProfile;
