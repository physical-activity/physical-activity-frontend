import './RegisterHeader.css';
const RegisterHeader = ({ name }: { name: string }) => {
	return (
		<div className="register-header">
			<h2 className="register-header__title">{name}</h2>
		</div>
	);
};

export default RegisterHeader;
