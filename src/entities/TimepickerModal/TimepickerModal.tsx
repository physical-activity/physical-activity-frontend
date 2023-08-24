import Timepicker from 'features/timepicker';
import './TimepickerModal.css';

interface TimepickerModalTypes {
	title: string;
	isOpen: boolean;
	onClose: () => void;
	handleTimePick: (date: string) => void;
}

const TimepickerModal = ({
	title,
	isOpen,
	onClose,
	handleTimePick,
}: TimepickerModalTypes) => {
	return (
		<div className={`modal ${isOpen && 'modal_opened'}`}>
			<div className="modal__container">
				<Timepicker
					title={title}
					onClose={onClose}
					handleTimePick={handleTimePick}
				/>
			</div>
		</div>
	);
};

export default TimepickerModal;
