export const BASE_URL = 'https://easyfit.acceleratorpracticum.ru/api/v1';

const handleResponse = (res: any) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
};

export const getTrainingTypes = () => {
	return fetch(`${BASE_URL}/training_types/`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(handleResponse);
};
