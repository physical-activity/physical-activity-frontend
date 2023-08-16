import { type } from 'os';
import { useState, useCallback } from 'react';

type TypeValue = {
	training_date: string;
	started_at: string;
	distance: number | undefined;
	finished_at: string;
	steps_num: number | undefined;
};

const initialValues: TypeValue = {
	training_date: '',
	started_at: '',
	distance: undefined,
	finished_at: '',
	steps_num: undefined,
};

const initialErrors = {
	training_date: '',
	started_at: '',
	distance: '',
	finished_at: '',
	steps_num: '',
};

export function useTrainingFormValidation() {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [isValid, setIsValid] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
		if (name === 'training_date' && e.target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимый формат даты: ДД/ММ/ГГГГ' });
		} else if (name === 'started_at' && e.target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы формат: ЧЧ:ММ' });
		} else if (name === 'distance' && e.target.validationMessage !== '') {
			setErrors({
				...errors,
				[name]: 'Допустимы только целые числа',
			});
		} else if (name === 'finished_at' && e.target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы формат: ЧЧ:ММ' });
		} else if (name === 'steps_num' && e.target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы только целые числа' });
		} else {
			setErrors({ ...errors, [name]: e.target.validationMessage });
		}

		const form = e.target.closest('form');
		if (form) {
			setIsValid(form.checkValidity());
		}
	};

	const resetForm = useCallback(
		(
			newValues = initialValues,
			newErrors = initialErrors,
			newIsValid = false
		) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return { values, handleChange, errors, isValid, resetForm, setIsValid };
}
