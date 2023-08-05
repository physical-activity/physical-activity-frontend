import { useNavigate } from 'react-router';

import './HeaderMain.css';

import loginIcon from './icons/login.svg';

const HeaderMain = () => {
	const navigate = useNavigate();

	return (
		<div className="header-main">
			<h1 className="header-main__logo">easyfit</h1>
			<button
				className="header-main__btn"
				onClick={() => {
					navigate('signin');
				}}
			>
				<img src={loginIcon} alt="Логин" />
			</button>
		</div>
	);
};

export default HeaderMain;
