import styles from './Profile.module.scss';

import pencilIcon from './icons/pencil.svg';
import { Input } from 'entities/Input/Input';

export const Profile = ({
	isInputDisabled,
	handleChangeName,
	handleChangeSecondName,
	name,
	secondName,
	email,
	avatar,
	errors,
	toggleButtonText,
	handleEnableInput,
	saveChanges,
}: {
	name: string;
	secondName: string;
	email: string;
	avatar: string;
	isInputDisabled: boolean;
	handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeSecondName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errors: { name: string; secondName: string; email: string };
	toggleButtonText?: boolean;
	handleEnableInput: () => void;
	saveChanges: () => void;
}) => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile__content}>
				{!!avatar ? (
					<img className={styles.profile__avatar} src={avatar} alt="avatar" />
				) : (
					<div className={styles.profile__avatarbox}>
						<p className={styles.profile__letter}>{name.slice(0, 1)}</p>
					</div>
				)}
				<p className={styles.profile__name}>{`${name} ${secondName}`}</p>
				<p className={styles.profile__email}>{email}</p>
				{toggleButtonText ? (
					<button
						className={styles.profile__btn}
						onClick={() => handleEnableInput()}
					>
						Редактировать
						<img src={pencilIcon} alt=""></img>
					</button>
				) : (
					<button className={styles.profile__btn} onClick={() => saveChanges()}>
						Сохранить
					</button>
				)}
			</div>
			{toggleButtonText ? null : (
				<>
					<Input
						id="name"
						name="name"
						type="text"
						value={name}
						setValue={handleChangeName}
						disabled={isInputDisabled}
						required={true}
						pattern="[A-Za-zА-Яа-я\s\-]{2,}"
						isValidInput={errors.name}
					/>
					<Input
						id="secondName"
						name="secondName"
						type="text"
						value={secondName}
						setValue={handleChangeSecondName}
						required={false}
						disabled={isInputDisabled}
						pattern="[A-Za-zА-Яа-я\s\-]{2,}"
						isValidInput={errors.secondName}
					/>
				</>
			)}
		</div>
	);
};
