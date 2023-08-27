import { useNavigate } from 'react-router';
import './Header.css';
import logo from './Logo_easyfit.svg';
const Header = ({ name }: { name: string }) => {
	const navigate = useNavigate();

	return (
		<div className="header">
			<img className="header_logo" src={logo} />
			<div className="header_select">
				<h2
					className={`header__title ${
						name === 'вход' && 'header__title_selected'
					}`}
				>
					ВХОД
				</h2>{' '}
				<span>|</span>
				<h2
					className={`header__title ${
						name === 'регистрация' && 'header__title_selected'
					}`}
					onClick={() => navigate('/register')}
				>
					РЕГИСТРАЦИЯ
				</h2>
			</div>
		</div>
	);
};

export default Header;
