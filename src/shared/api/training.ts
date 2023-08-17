import { BASE_URL } from 'shared/utils/constants';

type Data = {
	training_type: string;
	started_at: string;
	finished_at: string | undefined;
	distance: number | undefined;
	steps_num: number | undefined;
	reminder: boolean;
};

const handleResponse = (res: any) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
};

export const getTrainingTypes = async () => {
	const res = await fetch(`${BASE_URL}/training_types/`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return handleResponse(res);
};

export const createTraining = async (data: Data) => {
	const token = localStorage.getItem('token');
	const res = await fetch(`${BASE_URL}/trainings/`, {
		method: 'POST',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return handleResponse(res);
};

export const getUserTrainings = async () => {
	const token = localStorage.getItem('token');
	const res = await fetch(`${BASE_URL}/trainings/`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return handleResponse(res);
};
