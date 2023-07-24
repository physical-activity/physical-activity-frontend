import { useState } from 'react';

export function useForm() {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		repeatpassword: '',
	});

	const [isValid, setIsValid] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		setValues({ ...values, [name]: value });
		if (name === 'name' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимые символы: пробел, дефис' });
		} else if (name === 'email' && target.validationMessage !== '') {
			setErrors({ ...errors, [name]: 'Допустимы только латинские буквы' });
		} else if (
			(name === 'password' || name === 'repeatpassword') &&
			target.validationMessage !== ''
		) {
			setErrors({
				...errors,
				[name]:
					'Минимум 6 символов: буквы в верхнем и нижем регистре, пробел, дефис',
			});
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
