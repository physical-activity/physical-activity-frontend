import './Header.css';

interface HeaderProps {
	headerTitleText: string;
}

const Header = ({ headerTitleText }: HeaderProps) => {
	return (
		<div className="header">
			<h1 className="header__title">{headerTitleText}</h1>
		</div>
	);
};

export default Header;
