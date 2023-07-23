import './Footer.css';

interface FooterProps {
	footerQuestion: string;
	footerAnswer: string;
}

export const Footer = ({ footerQuestion, footerAnswer }: FooterProps) => {
	return (
		<div className="signin__footer">
			<p className="signin__footer-text">
				{footerQuestion}{' '}
				<span className="signin__footer-span">{footerAnswer}</span>
			</p>
		</div>
	);
};
