import './Footer.css';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
	footerText: string;
	footerLink: string;
}

export const Footer = ({ footerText, footerLink }: FooterProps) => {
	const navigate = useNavigate();

	return (
		<div className="signin__footer">
			<p
				className="signin__footer-text"
				onClick={() => navigate(`/${footerLink}`)}
			>
				{footerText}
			</p>
		</div>
	);
};
