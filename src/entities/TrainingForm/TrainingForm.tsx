import './TrainingForm.css';
import React, { useEffect, useState, useCallback, useReducer } from 'react';

import { TrainingInput } from '../TrainingInput/TrainingInput';
import { Checkbox } from '../RegisterCheckbox/RegisterCheckbox';
import { useForm } from '../../features/training-form-validator/index';
import { signup } from '../../shared/api/signup';
import { useNavigate } from 'react-router-dom';
import { REGEX } from 'shared/utils/constants';
import { ReminderBlock } from '../ReminderBlock/ReminderBlock';
import requireSvg from './ic_required.svg';
import calendarSvg from './ic_calendar.svg';

export const TrainingForm = () => {
	const setFocus = useCallback((element: any) => {
		element?.focus();
	}, []);

	const navigate = useNavigate();
	const { values, handleChange, errors, isValid } = useForm();

	const [trainingTypeInputValue, setTrainingTypeInputValue] = useState('');
	const [trainingDateInputValue, setTrainingDateInputValue] = useState('');
	const [trainingStartedAtInputValue, setTrainingStartedAtInputValue] =
		useState('');
	const [trainingDistanceInputValue, setTrainingDistanceInputValue] =
		useState('');
	const [trainingFinishedAtInputValue, setTrainingFinishedAtInputValue] =
		useState('');

	const validateTrainingTypeInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingTypeInputValue(e.target.value);
	};

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
		setTrainingDistanceInputValue(e.target.value);
	};

	const validateTrainingFinishedAtInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		handleChange(e);
		setTrainingFinishedAtInputValue(e.target.value);
	};

	const validateCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		signup(values.name, values.email, values.password)
			.then(() => navigate('/register-confirm'))
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<form className="training__form" onSubmit={handleSubmit}>
			<div className="training__container">
				<div className="training__input">
					<TrainingInput
						type="text"
						id="trainingtype"
						placeholder="Активность"
						name="trainingtype"
						value={trainingTypeInputValue}
						setValue={validateTrainingTypeInput}
						isValidInput={errors.trainingtype}
					/>
				</div>

				<div className="training__input">
					<p className="training__label">Дата</p>
					<img
						src={requireSvg}
						className="training__input-span"
						alt="required"
					/>
					<TrainingInput
						type="text"
						id="training_date"
						placeholder=""
						name="training_date"
						value={trainingDateInputValue}
						setValue={validateTrainingDateInput}
						isValidInput={errors.training_date}
						// pattern={REGEX.email.source}
					/>
					<button className="training__button_calendar">
						<img src={calendarSvg} alt="required" />
					</button>
				</div>

				<div className="training__input">
					<p className="training__label">Время старта</p>
					<TrainingInput
						type="text"
						id="started_at"
						placeholder="00:00 ч"
						name="started_at"
						value={trainingStartedAtInputValue}
						setValue={validateTrainingStartedAtInput}
						isValidInput={errors.started_at}
						// pattern={REGEX.email.source}
					/>
				</div>

				<div className="training__input">
					<p className="training__label">Дистанция</p>
					<TrainingInput
						type="text"
						id="distance"
						placeholder="00 км"
						name="distance"
						value={trainingDistanceInputValue}
						setValue={validateTrainingDistanceInput}
						isValidInput={errors.distance}
						// pattern={REGEX.email.source}
					/>
				</div>

				<div className="training__input">
					<p className="training__label">Время окончания</p>
					<TrainingInput
						type="text"
						id="finished_at"
						placeholder="00:00 ч"
						name="finished_at"
						value={trainingFinishedAtInputValue}
						setValue={validateTrainingFinishedAtInput}
						isValidInput={errors.finished_at}
						// pattern={REGEX.email.source}
					/>
				</div>
			</div>
			<div className="training__container">
				<ReminderBlock
					type="checkbox"
					id="terms"
					name="terms"
					validateInput={validateCheckboxInput}
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
