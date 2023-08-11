import { useNavigate } from 'react-router';

import './HeaderMain.css';

import loginIcon from './icons/login.svg';

const HeaderMain = ({
	userData,
}: {
	userData: { first_name: string; photo: string };
}) => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	return (
		<div className="header-main">
			<h1 className="header-main__logo">easyfit</h1>
			<div className="header-main__user">
				<p className="header-main__name">{userData.first_name}</p>
				{token !== null ? (
					<>
						<button
							className="header-main__btn"
							onClick={() => {
								navigate('/users/123');
							}}
						>
							<p className="header-main__letter">
								{userData.first_name.slice(0, 1)}
							</p>
						</button>
					</>
				) : (
					<>
						<img
							src={loginIcon}
							alt="Логин"
							onClick={() => navigate('/signin')}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default HeaderMain;
