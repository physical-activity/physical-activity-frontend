import { useState } from 'react';

export function useForm() {
	const [values, setValues] = useState({
		training_date: '',
		started_at: '',
		distance: null,
		finished_at: '',
		steps_num: '',
	});
	const [errors, setErrors] = useState({
		training_date: '',
		started_at: '',
		distance: '',
		finished_at: '',
		steps_num: '',
	});

	const [isValid, setIsValid] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		setValues({ ...values, [name]: value });
		if (name === 'training_date' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы формат даты: ДД/ММ/ГГГГ' });
		} else if (name === 'started_at' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы формат: ЧЧ:ММ' });
		} else if (name === 'distance' && target.validationMessage !== '') {
			setErrors({
				...errors,
				[name]: 'Допустимы только целые числа',
			});
		} else if (name === 'finished_at' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы формат: ЧЧ:ММ' });
		} else if (name === 'steps_num' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы только целые числа' });
		} else {
			setErrors({ ...errors, [name]: target.validationMessage });
		}
		const form = target.closest('form');
		if (form) {
			setIsValid(form.checkValidity());
		}
	};

	return { values, errors, isValid, handleChange };
}
