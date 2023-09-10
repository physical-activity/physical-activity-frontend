import { BASE_URL } from 'shared/utils/constants';

export const getUserData = async () => {
	const token = localStorage.getItem('token');
	// const res = await fetch('http://91.201.53.71/api/v1/account/', {
	const res = await fetch(`${BASE_URL}/account/`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
		},
	});
	let response;
	if (res.status === 200) {
		response = res.json();
	} else {
		throw new Error('Smth went wrong');
	}
	return response;
};
