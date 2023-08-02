import { useCallback, useState } from 'react';

export function useFormValidation() {
	const [values, setValues] = useState({
		email: '',
		password: '',
		secondPassword: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
		secondPassword: '',
	});
	const [isValid, setIsValid] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		if (name === 'email' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Введите корректный Email' });
		} else if (
			(name === 'password' || name === 'secondPassword') &&
			target.validationMessage !== ''
		) {
			setErrors({
				...errors,
				[name]:
					'Пароль должен состоять из 6 символов, буквы в верхнем и нижнем регистре, пробел, дефис',
			});
		} else {
			setErrors({ ...errors, [name]: target.validationMessage });
		}
		setValues({ ...values, [name]: value });
		const form = target.closest('form');
		if (form) {
			setIsValid(form.checkValidity());
		}
	};

	const resetForm = useCallback(
		(
			newValues = { email: '', password: '', secondPassword: '' },
			newErrors = { email: '', password: '', secondPassword: '' },
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
