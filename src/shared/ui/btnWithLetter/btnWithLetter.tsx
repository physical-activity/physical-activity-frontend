import { useNavigate } from 'react-router';

import styles from './btnWithLetter.module.scss';

import { UserState } from 'store/reducers/userSlice';

export const BtnWithLetter = ({ userData }: { userData: UserState }) => {
	const navigate = useNavigate();

	return (
		<button
			className={styles.btn}
			onClick={() => {
				navigate('/users/123');
			}}
		>
			<p className={styles.btn__letter}>
				{userData.user.first_name.slice(0, 1)}
			</p>
		</button>
	);
};
