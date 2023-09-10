type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const calendarFormatDate = (date: Value) => {
	const dateValue = date?.toLocaleString('ru-RU').split('.', 3);

	if (dateValue) {
		const day = dateValue[0];
		const month = dateValue[1];
		const year = dateValue[2].split(',', 1)[0];
		const formattedDate = `${day}/${month}/${year}`;

		return formattedDate;
	}
};

export default calendarFormatDate;
