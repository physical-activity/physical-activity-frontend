const timepickerFormatTime = (hour: number, minutes: number) => {
	let formattedHour;
	let formattedMinutes;

	hour <= 9 ? (formattedHour = '0' + hour) : (formattedHour = hour);
	minutes <= 9
		? (formattedMinutes = '0' + minutes)
		: (formattedMinutes = minutes);
	return `${formattedHour}:${formattedMinutes}`;
};

export default timepickerFormatTime;
