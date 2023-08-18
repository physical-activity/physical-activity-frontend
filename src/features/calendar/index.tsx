import { useState } from 'react';
import Calendar from 'react-calendar';

import './index.css';
import { ReactComponent as NextIcon } from './images/next-icon.svg';
import { ReactComponent as PrevIcon } from './images/prev-icon.svg';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="custom-calendar">
			<Calendar
				onChange={onChange}
				value={value}
				next2Label={null}
				prev2Label={null}
				nextLabel={<NextIcon />}
				prevLabel={<PrevIcon />}
				navigationLabel={({ date, locale }) =>
					`${date.toLocaleDateString(locale, {
						month: 'long',
					})} ${date.getFullYear()}`
				}
			/>
			<div className="custom-calendar__btns-group">
				<button className="custom-calendar__btn">Отменить</button>
				<button className="custom-calendar__btn custom-calendar__btn_main">
					Выбрать
				</button>
			</div>
		</div>
	);
}
