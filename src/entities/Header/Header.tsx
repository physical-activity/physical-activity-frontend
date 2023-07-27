import './Header.css';
const Header = ({ name }: { name: string }) => {
	return (
		<div className="header">
			{/* <p className="header__logo">easyfit</p> */}
			<h2 className="header__title">{name}</h2>
		</div>
	);
};

export default Header;
