import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import styles from './BtnBlock.module.scss';

type Props = {
	text: string;
	btnType?: string;
};

export const BtnBlock = ({ text, btnType }: Props) => {
	const navigate = useNavigate();
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token ? setIsToken(true) : setIsToken(false);
	}, []);

	return (
		<button
			className={styles.btn}
			onClick={() => {
				isToken ? navigate('/training') : navigate('/signin');
			}}
		>
			{text}
		</button>
	);
};
