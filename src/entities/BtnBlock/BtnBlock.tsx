import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import './BtnBlock.css';

const BtnBlock = ({ text }: { text: string }) => {
	const navigate = useNavigate();
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		token ? setIsToken(true) : setIsToken(false);
	}, []);

	return (
		<div className="btnBlock">
			<button
				className="btnBlock__btn"
				onClick={() => {
					isToken ? navigate('/training') : navigate('/register');
				}}
			>
				{text}
			</button>
		</div>
	);
};

export default BtnBlock;
