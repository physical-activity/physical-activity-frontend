import './Header.css';
const Header = ({ name }: { name: string }) => {
	return (
		<div className="header">
			<h2 className="header__title">{name}</h2>
		</div>
	);
};

export default Header;
