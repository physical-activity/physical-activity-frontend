export const handleISODate = (
	training_date: string,
	started_at: string,
	finished_at: string
): any => {
	const date = Number(training_date[0] + training_date[1]);
	const month = Number(training_date[3] + training_date[4]) - 1;
	const year = Number(
		training_date[6] + training_date[7] + training_date[8] + training_date[9]
	);
	const hour_start = Number(started_at[0] + started_at[1]);
	const minutes_start = Number(started_at[3] + started_at[4]);
	const hour_finish = Number(finished_at[0] + finished_at[1]);
	const minutes_finish = Number(finished_at[3] + finished_at[4]);

	const startTime = new Date(
		year,
		month,
		date,
		hour_start,
		minutes_start
	).toISOString();

	let finishTime;

	if (Boolean(finished_at)) {
		finishTime = new Date(
			year,
			month,
			date,
			hour_finish,
			minutes_finish
		).toISOString();
	} else {
		finishTime = undefined;
	}

	const time: (string | undefined)[] = [startTime, finishTime];
	return time;
};

export const formatTime = (num: number): string => {
	if (num < 9) {
		const formatNum = '0' + num.toString();
		return formatNum;
	} else {
		const formatNum = num.toString();
		return formatNum;
	}
};
