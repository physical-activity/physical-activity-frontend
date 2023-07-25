import './Header.css';
const Header = ({ name }: { name: string }) => {
	return (
		<div className="header">
			<p className="header__logo">easyfit</p>
			<h1 className="header__title">{name}</h1>
		</div>
	);
};

export default Header;
