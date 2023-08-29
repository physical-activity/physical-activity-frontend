import { useNavigate } from 'react-router';

import styles from './logo.module.scss';

export const Logo = ({ text }: { text: string }) => {
	const navigate = useNavigate();
	return (
		<h1 className={styles.logo} onClick={() => navigate('/')}>
			{text}
		</h1>
	);
};
