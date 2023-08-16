import './TrainingForm.css';
import React, { useEffect, useState } from 'react';

import { TrainingInput } from '../TrainingInput/TrainingInput';
import { getTrainingTypes } from '../../shared/api/training';
import { useTrainingFormValidation } from '../../shared/hooks/useTrainingFormValidation';
import { createTraining } from '../../shared/api/training';
import { useNavigate } from 'react-router-dom';
import { REGEX } from 'shared/utils/constants';
import { TrainingReminderBlock } from '../TrainingReminderBlock/TainingReminderBlock';
import { TrainingDuration } from '../TrainingDuration/TrainingDuration';
import requireSvg from './ic_required.svg';
import calendarSvg from './ic_calendar.svg';

export const TrainingForm = () => {
	type TypeItem = {
		name: string;
	};

	const navigate = useNavigate();

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
	const [isListOpen, setIsListOpen] = useState(false);
	const [isTrainingReminder, setIsTrainingReminder] = useState(false);

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

	const validateTrainingDateInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingDateInputValue(e.target.value);
	};

	const validateTrainingStartedAtInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingStartedAtInputValue(e.target.value);
	};

	const validateTrainingDistanceInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingDistanceInputValue(Number(e.target.value));
	};

	const validateTrainingFinishedAtInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingFinishedAtInputValue(e.target.value);
	};

	const validateTrainingStepsNumInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingStepsNumInputValue(Number(e.target.value));
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const date = values.training_date[0] + values.training_date[1];
		const month = values.training_date[3] + values.training_date[4];
		const year =
			values.training_date[6] +
			values.training_date[7] +
			values.training_date[8] +
			values.training_date[9];
		const hour_start = values.started_at[0] + values.started_at[1];
		const minutes_start = values.started_at[3] + values.started_at[4];
		const hour_finish = values.finished_at[0] + values.finished_at[1];
		const minutes_finish = values.finished_at[3] + values.finished_at[4];

		const startTime = new Date(
			Number(year),
			Number(month),
			Number(date),
			Number(hour_start),
			Number(minutes_start)
		).toISOString();

		let finishTime;

		if (Boolean(values.finished_at)) {
			finishTime = new Date(
				Number(year),
				Number(month),
				Number(date),
				Number(hour_finish),
				Number(minutes_finish)
			).toISOString();
		} else {
			finishTime = undefined;
		}

		const data: any = {
			training_type: trainingTypeInputValue,
			started_at: startTime,
			finished_at: finishTime,
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

	return (
		<form className="training__form" onSubmit={handleSubmit}>
			<div className="training__container">
				<div className="list-conteiner">
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
						<ul className={isListOpen ? 'list__bottom_active' : 'list__bottom'}>
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

				<div className="training__input-conteiner">
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
							setValue={validateTrainingDateInput}
							pattern={REGEX.date.source}
							required={true}
						/>
						<button className="training__button_calendar">
							<img src={calendarSvg} alt="required" />
						</button>
					</div>
					<span className="training__error">{errors.training_date}</span>
				</div>

				<div className="training__input-conteiner">
					<div
						className={`training__input ${
							errors.started_at && 'training__input_error'
						}`}
					>
						<p className="training__label">Время старта</p>
						<TrainingInput
							type="text"
							id="started_at"
							placeholder="00:00 ч"
							name="started_at"
							value={trainingStartedAtInputValue}
							setValue={validateTrainingStartedAtInput}
							pattern={REGEX.time.source}
							required={true}
						/>
					</div>
					<span className="training__error">{errors.started_at}</span>
				</div>

				<div className="training__input-conteiner">
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

				<div className="training__input-conteiner">
					<div
						className={`training__input ${
							errors.finished_at && 'training__input_error'
						}`}
					>
						<p className="training__label">Время окончания</p>
						<TrainingInput
							type="text"
							id="finished_at"
							placeholder="00:00 ч"
							name="finished_at"
							value={trainingFinishedAtInputValue}
							setValue={validateTrainingFinishedAtInput}
							pattern={REGEX.time.source}
						/>
					</div>
					<span className="training__error">{errors.finished_at}</span>
				</div>

				<div className="training__input-conteiner">
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
			</div>

			<div className="training__container">
				<TrainingDuration value={`01:10 ч`} />
			</div>

			<div className="training__container">
				<TrainingReminderBlock
					type="checkbox"
					id="terms"
					name="terms"
					validateInput={() => setIsTrainingReminder(!isTrainingReminder)}
				/>
			</div>

			<div className="training__container">
				<button
					className={`training__button ${
						!isValid && 'training__button_unvalid'
					}`}
					disabled={!isValid}
				>
					запаланировать
				</button>
			</div>
		</form>
	);
};
