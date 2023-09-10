import { BASE_URL } from 'shared/utils/constants';

export const resetPassword = async (email: string) => {
	const response = await fetch(`${BASE_URL}/auth/reset_password/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
		}),
	});
	let res;
	if (response.status === 204) {
		// res = response.json()
	} else {
		throw new Error('Smth went wrong');
	}
	return res;
};
