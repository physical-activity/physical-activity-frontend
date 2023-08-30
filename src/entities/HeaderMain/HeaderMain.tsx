import styles from './HeaderMain.module.scss';

import { UserState } from 'store/reducers/userSlice';
import { Logo } from 'shared/logo/logo';
import { BtnWithLetter } from 'shared/btnWithLetter/btnWithLetter';
import { useAppSelector } from 'shared/hooks/redux';

const HeaderMain = ({ userData }: { userData: UserState }) => {
	const token = useAppSelector((state) => state.user.auth_token);
	const localToken = localStorage.getItem('token');
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__wrap}>
					<Logo text={'easyfit'} />
					<div className={styles.header__user}>
						{token || localToken ? <BtnWithLetter userData={userData} /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;
