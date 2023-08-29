import './TrainingForm.css';
import React, { useEffect, useState } from 'react';

import { TrainingInput } from '../TrainingInput/TrainingInput';
import { getTrainingTypes } from '../../shared/api/training';
import { useTrainingFormValidation } from '../../shared/hooks/useTrainingFormValidation';
import { createTraining } from '../../shared/api/training';
import { REGEX } from 'shared/utils/constants';
import { TrainingReminderBlock } from '../TrainingReminderBlock/TainingReminderBlock';
import { TrainingDuration } from '../TrainingDuration/TrainingDuration';
import requireSvg from './ic_required.svg';
import calendarSvg from './ic_calendar.svg';
import CalendarModal from 'entities/CalendarModal/CalendarModal';
import TimepickerModal from 'entities/TimepickerModal/TimepickerModal';

export const TrainingForm = () => {
	type TypeItem = {
		name: string;
	};

	const { values, handleChange, errors, isValid, resetForm, setIsValid } =
		useTrainingFormValidation();

	const [trainingTypeInputValue, setTrainingTypeInputValue] = useState('');
	const [trainingDateInputValue, setTrainingDateInputValue] = useState('');
	const [trainingStartedAtInputValue, setTrainingStartedAtInputValue] =
		useState('');
	const [trainingDistanceInputValue, setTrainingDistanceInputValue] = useState<
		number | undefined
	>(undefined);
	const [trainingFinishedAtInputValue, setTrainingFinishedAtInputValue] =
		useState('');
	const [trainingStepsNumInputValue, setTrainingStepsNumInputValue] = useState<
		number | undefined
	>(undefined);
	const [trainingTypes, setTrainingTypes] = useState<TypeItem[]>([]);
	const [trainingDuration, setTrainingDuration] = useState('');
	const [isListOpen, setIsListOpen] = useState(false);
	const [isTrainingReminder, setIsTrainingReminder] = useState(false);
	const [isDuratiomError, setIsDuratiomError] = useState(false);
	const [isDuratiomErrorMessage, setIsDuratiomErrorMessage] = useState('');
	const [isCaledarModalOpen, setIsCalendarModalOpen] = useState(false);
	const [isTimeModalStartOpen, setIsTimeModalStartOpen] = useState(false);
	const [isTimeModalFinishOpen, setIsTimeModalFinishOpen] = useState(false);

	useEffect(() => {
		getTrainingTypes()
			.then((res) => {
				setTrainingTypes(res);
				setTrainingTypeInputValue(res[0].name);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {});
	}, []);

	useEffect(() => {
		handleTrainingDuration(
			trainingStartedAtInputValue,
			trainingFinishedAtInputValue,
			trainingDateInputValue,
			errors.training_date,
			errors.started_at,
			errors.finished_at
		);
	}, [
		trainingDateInputValue,
		trainingFinishedAtInputValue,
		trainingStartedAtInputValue,
		errors.training_date,
		errors.started_at,
		errors.finished_at,
	]);

	function handleTimeStartPick(time: string) {
		setTrainingStartedAtInputValue(time);
	}

	const validateTrainingDistanceInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingDistanceInputValue(Number(e.target.value));
	};

	function handleTimeFinishPick(time: string) {
		setTrainingFinishedAtInputValue(time);
	}

	const validateTrainingStepsNumInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingStepsNumInputValue(Number(e.target.value));
	};

	const handleTrainingDuration = (
		startTime: string,
		finishTime: string,
		date: string,
		dateErrors: string,
		startErrors: string,
		finishErrors: string
	): any => {
		if (
			startTime &&
			finishTime &&
			date &&
			!dateErrors &&
			!startErrors &&
			!finishErrors
		) {
			const time = handleISODate(date, startTime, finishTime);

			if (time[0] && time[1]) {
				const currentStart = new Date(time[0]);
				const currentFinish = new Date(time[1]);
				const currentDuration =
					currentFinish.getTime() - currentStart.getTime();
				const hour = Math.floor(currentDuration / 3600000);
				const minutes = (currentDuration % 3600000) / 60000;
				setTrainingDuration(`${formatTime(hour)}:${formatTime(minutes)} ч`);
			}

			if (time[0] > time[1]) {
				setIsDuratiomError(true);
				setIsDuratiomErrorMessage(
					'Время окончания не может быть меньше времени старта'
				);
			} else {
				setIsDuratiomError(false);
				setIsDuratiomErrorMessage('');
			}
		} else {
			setTrainingDuration('');
		}
	};

	const handleISODate = (
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

	const formatTime = (num: number): string => {
		if (num < 9) {
			const formatNum = '0' + num.toString();
			return formatNum;
		} else {
			const formatNum = num.toString();
			return formatNum;
		}
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const time = handleISODate(
			trainingDateInputValue,
			trainingStartedAtInputValue,
			trainingFinishedAtInputValue
		);
		const data: any = {
			training_type: trainingTypeInputValue,
			started_at: time[0],
			finished_at: time[1],
			distance: values.distance,
			steps_num: values.steps_num,
			reminder: isTrainingReminder,
		};

		Object.keys(data).forEach((key) =>
			data[key] === undefined ? delete data[key] : {}
		);

		createTraining(data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleDatePick(date: string) {
		setTrainingDateInputValue(date);
	}

	return (
		<>
			<form
				className="training__form"
				onSubmit={handleSubmit}
				noValidate
				autoComplete="off"
			>
				<div className="training__container training__container_form">
					<div className="list-container">
						<div className={`list ${isListOpen && 'list_active'}`}>
							<div className="list__top">
								<p className="list__title">{trainingTypeInputValue}</p>
								<div className="list__navigation">
									<button
										onClick={() => setIsListOpen(!isListOpen)}
										className={`${
											isListOpen ? 'list__close-button' : 'list__open-button'
										}`}
										type="button"
									/>
								</div>
							</div>
							<ul
								className={isListOpen ? 'list__bottom_active' : 'list__bottom'}
							>
								{trainingTypes.map((item, i) => (
									<li
										key={i}
										onClick={() => {
											setTrainingTypeInputValue(item.name);
											setIsListOpen(false);
										}}
										className="list__text"
									>
										{item.name}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="training__input-container">
						<div
							className={`training__input ${
								errors.training_date && 'training__input_error'
							}`}
						>
							<p className="training__label">Дата</p>
							<img
								src={requireSvg}
								className="training__input-span"
								alt="required"
							/>
							<TrainingInput
								type="text"
								id="training_date"
								name="training_date"
								value={trainingDateInputValue}
								setValue={() => handleDatePick}
								pattern={REGEX.date.source}
								required={true}
							/>
							<button
								type="button"
								className="training__button_calendar"
								onClick={() => setIsCalendarModalOpen(true)}
							>
								<img src={calendarSvg} alt="required" />
							</button>
						</div>
						<span className="training__error">{errors.training_date}</span>
					</div>

					<div className="training__input-container">
						<div
							className={`training__input ${
								errors.started_at && 'training__input_error'
							}`}
							onClick={() => setIsTimeModalStartOpen(true)}
						>
							<p className="training__label">Время старта</p>
							<TrainingInput
								type="text"
								id="started_at"
								placeholder="00:00 ч"
								name="started_at"
								value={trainingStartedAtInputValue}
								setValue={() => handleTimeStartPick}
								pattern={REGEX.time.source}
								required={true}
								isReadOnly
							/>
						</div>
						<span className="training__error">{errors.started_at}</span>
					</div>

					<div className="training__input-container">
						<div
							className={`training__input ${
								errors.distance && 'training__input_error'
							}`}
						>
							<p className="training__label">Дистанция</p>
							<TrainingInput
								type="text"
								id="distance"
								placeholder="00 км"
								name="distance"
								value={trainingDistanceInputValue}
								setValue={validateTrainingDistanceInput}
								pattern={REGEX.distance.source}
							/>
						</div>
						<span className="training__error">{errors.distance}</span>
					</div>

					<div className="training__input-container">
						<div
							className={`training__input ${
								errors.finished_at && 'training__input_error'
							}`}
							onClick={() => setIsTimeModalFinishOpen(true)}
						>
							<p className="training__label">Время окончания</p>
							<TrainingInput
								type="text"
								id="finished_at"
								placeholder="00:00 ч"
								name="finished_at"
								value={trainingFinishedAtInputValue}
								setValue={() => handleTimeFinishPick}
								pattern={REGEX.time.source}
								isReadOnly
							/>
						</div>
						<span className="training__error">{errors.finished_at}</span>
						<span className="training__error">{isDuratiomErrorMessage}</span>
					</div>

					{trainingTypeInputValue === trainingTypes[2]?.name && (
						<div className="training__input-container">
							<div
								className={`training__input ${
									errors.steps_num && 'training__input_error'
								}`}
							>
								<p className="training__label">Шаги</p>
								<TrainingInput
									type="text"
									id="steps_num"
									placeholder="0"
									name="steps_num"
									value={trainingStepsNumInputValue}
									setValue={validateTrainingStepsNumInput}
									pattern={REGEX.distance.source}
								/>
							</div>
							<span className="training__error">{errors.steps_num}</span>
						</div>
					)}
				</div>

				{trainingDuration && (
					<div className="training__container">
						<TrainingDuration value={trainingDuration} />
					</div>
				)}

				<div className="training__container">
					<TrainingReminderBlock
						type="checkbox"
						id="reminder"
						name="reminder"
						validateInput={() => setIsTrainingReminder(!isTrainingReminder)}
					/>
				</div>

				<div className="training__container">
					<button
						className={`training__button ${
							(!trainingDateInputValue || !trainingStartedAtInputValue) &&
							'training__button_unvalid'
						}`}
						disabled={!(trainingDateInputValue && trainingStartedAtInputValue)}
					>
						запланировать
					</button>
				</div>
			</form>
			<CalendarModal
				isOpen={isCaledarModalOpen}
				onClose={() => setIsCalendarModalOpen(false)}
				handleDatePick={handleDatePick}
			/>
			<TimepickerModal
				title="Время старта"
				isOpen={isTimeModalStartOpen}
				onClose={() => setIsTimeModalStartOpen(false)}
				handleTimePick={handleTimeStartPick}
			/>
			<TimepickerModal
				title="Время старта"
				isOpen={isTimeModalFinishOpen}
				onClose={() => setIsTimeModalFinishOpen(false)}
				handleTimePick={handleTimeFinishPick}
			/>
		</>
	);
};
