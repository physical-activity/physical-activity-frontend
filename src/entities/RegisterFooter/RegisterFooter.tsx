import './RegisterFooter.css';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
	footerText: string;
	footerLink: string;
}

export const RegisterFooter = ({ footerText, footerLink }: FooterProps) => {
	const navigate = useNavigate();

	return (
		<div className="register__footer">
			<p
				className="register__footer-text"
				onClick={() => navigate(`/${footerLink}`)}
			>
				{footerText}
			</p>
		</div>
	);
};
