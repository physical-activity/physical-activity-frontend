import { useNavigate } from 'react-router-dom';
import './index.css';
export const Footer = ({
	footerQuestion,
	footerAnswer,
}: {
	footerQuestion: string;
	footerAnswer: string;
}) => {
	return (
		<div className="footer">
			<p className="footer__text">
				{footerQuestion} <span className="footer__span">{footerAnswer}</span>
			</p>
		</div>
	);
};
