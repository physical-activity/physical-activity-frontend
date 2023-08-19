/* eslint-disable no-useless-escape */
export const REGEX = {
	name: /^[A-Za-zА-Яа-я\s\-]{2,50}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /[a-zA-Z0-9\#\?\!\@\$\%\^\&\*\-]*.{6,}/,
	date: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, // ДД/ММ/ГГГГ
	time: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
	distance: /[0-9]+/,
};

export const BASE_URL = 'https://easyfit.space/api/v1';
