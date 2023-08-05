import { useNavigate } from 'react-router';

import './BtnBlock.css';

const BtnBlock = ({ text }: { text: string }) => {
	const navigate = useNavigate();

	return (
		<div className="btnBlock">
			<button
				className="btnBlock__btn"
				onClick={() => {
					navigate('/register');
				}}
			>
				{text}
			</button>
		</div>
	);
};

export default BtnBlock;
