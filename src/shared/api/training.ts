import { BASE_URL } from 'shared/utils/constants';

type Data = {
	training_type: string;
	started_at: string;
	finished_at: string | undefined;
	distance: number | undefined;
	steps_num: number | undefined;
	reminder: boolean;
};

type Training = {
	id: number;
	author: string;
	training_type: string;
	started_at: string;
	finished_at: string;
	distance: number;
	steps_num: number;
	completed: boolean;
	reminder: boolean;
	rating: number;
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

export const deleteTraining = async (id: number) => {
	const token = localStorage.getItem('token');
	const res = await fetch(`${BASE_URL}/trainings/${id}/`, {
		method: 'DELETE',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
	});
	return res;
};

export const updateTraining = async (id: number, data: Training) => {
	const token = localStorage.getItem('token');
	const res = await fetch(`${BASE_URL}/trainings/${id}/`, {
		method: 'PUT',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return handleResponse(res);
};
