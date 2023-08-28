import './StatisticsPopup.css';

interface StatisticsPopupTypes {
	isOpen: boolean;
	onClose: () => void;
	// handlePeriodPick: (period: string) => void;
}

const StatisticsPopup = ({
	isOpen,
	onClose,
} // handlePeriodPick,
: StatisticsPopupTypes) => {
	return (
		<div className={`statistics-popup ${isOpen && 'statistics-popup_opened'}`}>
			<div className="statistics-popup__container">
				<div className="statistics-popup__resize-block">
					<div className="statistics-popup__resize-bar"></div>
				</div>
				<div className="statistics-popup__heading-block">
					<h3 className="statistics-popup__heading">Период</h3>
					<button
						className="statistics-popup__close-button"
						onClick={onClose}
					></button>
				</div>
				<ul className="statistics-popup__selector">
					<li className="statistics-popup__selector-item">
						<h4 className="statistics-popup__selector-heading statistics-popup__selector-heading_active">
							Сегодня
						</h4>
						<div className="statistics-popup__selector-img statistics-popup__selector-img_active"></div>
					</li>
					<li className="statistics-popup__selector-item">
						<h4 className="statistics-popup__selector-heading">За неделю</h4>
						<div className="statistics-popup__selector-img"></div>
					</li>
					<li className="statistics-popup__selector-item">
						<h4 className="statistics-popup__selector-heading">За месяц</h4>
						<div className="statistics-popup__selector-img"></div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default StatisticsPopup;
