import './Header.css';

interface HeaderProps {
	headerTitleText: string;
}

const Header = ({ headerTitleText }: HeaderProps) => {
	return (
		<div className="header">
			<p className="header__logo">Easyfit</p>
			<h1 className="header__title">{headerTitleText}</h1>
		</div>
	);
};

export default Header;
