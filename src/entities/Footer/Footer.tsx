import './Footer.css';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
	footerQuestion: string;
	footerAnswer: string;
	footerLink: string;
}

export const Footer = ({
	footerQuestion,
	footerAnswer,
	footerLink,
}: FooterProps) => {
	const navigate = useNavigate();

	return (
		<div className="signin__footer">
			<p className="signin__footer-text">
				{footerQuestion}{' '}
				<span
					className="signin__footer-span"
					onClick={() => navigate(`/${footerLink}`)}
				>
					{footerAnswer}
				</span>
			</p>
		</div>
	);
};
