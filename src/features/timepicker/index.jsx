import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css';

const hours = Array.from(Array(24).keys());
const minutes = Array.from(Array(60).keys());

export default function Timepicker({ title, onClose, handleTimePick }) {
	const today = new Date();

	const timepickerFormatTime = (hour, minutes) => {
		let formattedHour;
		let formattedMinutes;

		hour <= 9 ? (formattedHour = '0' + hour) : (formattedHour = hour);
		minutes <= 9
			? (formattedMinutes = '0' + minutes)
			: (formattedMinutes = minutes);
		return `${formattedHour}:${formattedMinutes}`;
	};

	const handleChooseClick = () => {
		const formattedTime = timepickerFormatTime(selectedHour, selectedMinute);
		handleTimePick(formattedTime);

		onClose();
	};

	const [selectedHour, setSelectedHour] = useState(null);
	const [selectedMinute, setSelectedMinute] = useState(null);

	return (
		<div className="timepicker">
			<h2 className="timepicker__title">{title}</h2>
			<div className="timepicker__main">
				<div className="picker">
					<Swiper
						initialSlide={
							selectedHour !== null ? selectedHour : today.getHours()
						}
						onSlideChange={(swiper) => {
							setSelectedHour(swiper.realIndex);
						}}
						slidesPerView={5}
						direction="vertical"
						centeredSlides
						grabCursor
						autoplay
						loop
					>
						{hours.map((hour) => (
							<SwiperSlide key={hour}>
								<div className="time">{hour.toString().padStart(2, '0')}</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="picker">
					<Swiper
						initialSlide={
							selectedMinute !== null ? selectedMinute : today.getMinutes()
						}
						onSlideChange={(swiper) => {
							setSelectedMinute(swiper.realIndex);
						}}
						slidesPerView={5}
						direction="vertical"
						grabCursor
						centeredSlides
						loop
						loopadditionalslides={minutes.length}
					>
						{minutes.map((minute) => (
							<SwiperSlide key={minute}>
								<div className="time">{minute.toString().padStart(2, '0')}</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className="timepicker__btns-group">
				<button className="timepicker__btn" onClick={onClose}>
					Отменить
				</button>
				<button
					className="timepicker__btn timepicker__btn_main"
					onClick={handleChooseClick}
				>
					Выбрать
				</button>
			</div>
			<span className="timepicker__active-line" />
		</div>
	);
}
