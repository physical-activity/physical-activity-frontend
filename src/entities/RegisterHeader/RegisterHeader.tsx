import './RegisterHeader.css';
const RegisterHeader = ({ name }: { name: string }) => {
	return (
		<div>
			<div className="register-header">
				<h1 className="register-header__logo">easyfit</h1>
			</div>
			<div>
				<h2 className="register-header__title">{name}</h2>
			</div>
		</div>
	);
};

export default RegisterHeader;
