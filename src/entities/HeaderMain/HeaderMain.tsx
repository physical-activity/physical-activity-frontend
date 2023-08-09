import { useNavigate } from 'react-router';

import './HeaderMain.css';

import loginIcon from './icons/login.svg';

const HeaderMain = () => {
	const navigate = useNavigate();

	return (
		<div className="header-main">
			<h1 className="header-main__logo">easyfit</h1>
			<div className="header-main__user">
				<p className="header-main__name">Влад</p>
				<button
					className="header-main__btn"
					onClick={() => {
						navigate('/users/123');
					}}
				>
					<p className="header-main__letter">B</p>
					{/* <img src={loginIcon} alt="Логин" /> */}
				</button>
			</div>
		</div>
	);
};

export default HeaderMain;
