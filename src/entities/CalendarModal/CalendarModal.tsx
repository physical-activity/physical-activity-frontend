import './CalendarModal.css';
import CustomCalendar from 'features/calendar';

interface CalendarModalTypes {
	isOpen: boolean;
	onClose: () => void;
	handleDatePick: (date: string) => void;
}

const CalendarModal = ({
	isOpen,
	onClose,
	handleDatePick,
}: CalendarModalTypes) => {
	return (
		<div className={`modal ${isOpen && 'modal_opened'}`}>
			<div className="modal__container">
				<CustomCalendar onClose={onClose} handleDatePick={handleDatePick} />
			</div>
		</div>
	);
};

export default CalendarModal;
