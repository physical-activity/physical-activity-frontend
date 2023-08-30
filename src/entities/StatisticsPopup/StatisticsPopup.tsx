import './StatisticsPopup.css';

interface StatisticsPopupTypes {
	isOpen: boolean;
	onClose: () => void;
	period: string;
	onPeriodPick: (period: string) => void;
}

const StatisticsPopup = ({
	isOpen,
	onClose,
	period,
	onPeriodPick,
}: StatisticsPopupTypes) => {
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
					<li
						className="statistics-popup__selector-item"
						onClick={() => onPeriodPick('day')}
					>
						<h4
							className={`statistics-popup__selector-heading ${
								period === 'day' && 'statistics-popup__selector-heading_active'
							}`}
						>
							Сегодня
						</h4>
						<div
							className={`statistics-popup__selector-img ${
								period === 'day' && 'statistics-popup__selector-img_active'
							}`}
						></div>
					</li>
					<li
						className="statistics-popup__selector-item"
						onClick={() => onPeriodPick('week')}
					>
						<h4
							className={`statistics-popup__selector-heading ${
								period === 'week' && 'statistics-popup__selector-heading_active'
							}`}
						>
							За неделю
						</h4>
						<div
							className={`statistics-popup__selector-img ${
								period === 'week' && 'statistics-popup__selector-img_active'
							}`}
						></div>
					</li>
					<li
						className="statistics-popup__selector-item"
						onClick={() => onPeriodPick('month')}
					>
						<h4
							className={`statistics-popup__selector-heading ${
								period === 'month' &&
								'statistics-popup__selector-heading_active'
							}`}
						>
							За месяц
						</h4>
						<div
							className={`statistics-popup__selector-img ${
								period === 'month' && 'statistics-popup__selector-img_active'
							}`}
						></div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default StatisticsPopup;
