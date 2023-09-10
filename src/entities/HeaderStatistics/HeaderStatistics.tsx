import { useNavigate } from 'react-router';

import './HeaderStatistics.css';

import { UserState } from 'store/reducers/userSlice';

const HeaderStatistics = ({ userData }: { userData: UserState }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	return (
		<div className="header-stats">
			<h1 className="header-stats__logo" onClick={() => navigate('/')}>
				easyfit
			</h1>
			<div className="header-stats__user">
				{token !== null ? (
					<>
						<button
							className="header-stats__btn"
							onClick={() => {
								navigate('/users/123');
							}}
						>
							<p className="header-stats__letter">
								{userData.user.first_name.slice(0, 1)}
							</p>
						</button>
					</>
				) : null}
			</div>
		</div>
	);
};

export default HeaderStatistics;
