import { BASE_URL } from 'shared/utils/constants';

export const signin = async (email: string, password: string) => {
	const response = await fetch(`${BASE_URL}/auth/token/login/`, {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			password: password,
			email: email,
		}),
	});
	let res;
	if (response.status === 200) {
		res = response.json();
	} else {
		throw new Error('Smth went wrong');
	}
	return res;
};
