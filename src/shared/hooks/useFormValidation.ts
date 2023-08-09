import { useCallback, useState } from 'react';

export function useFormValidation() {
	const [values, setValues] = useState({
		email: '',
		secondName: '',
		name: '',
		password: '',
		secondPassword: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		name: '',
		secondName: '',
		password: '',
		secondPassword: '',
	});
	const [isValid, setIsValid] = useState(true);

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
		} else if (name === 'name' && target.validationMessage !== '') {
			setErrors({
				...errors,
				[name]:
					'Допустимые символы для ввода: пробел, дефис, кириллические, латинские буквы',
			});
		} else if (name === 'secondName' && target.validationMessage !== '') {
			setErrors({
				...errors,
				[name]:
					'Допустимые символы для ввода: пробел, дефис, кириллические, латинские буквы',
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
			newValues = {
				email: '',
				password: '',
				secondPassword: '',
				name: '',
				secondName: '',
			},
			newErrors = {
				email: '',
				password: '',
				secondPassword: '',
				name: '',
				secondName: '',
			},
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
