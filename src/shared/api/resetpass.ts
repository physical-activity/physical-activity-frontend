import { BASE_URL } from 'shared/utils/constants';

// const BASE_USL = process.env.REACT_APP_BACKEND_BASE_URL;
export const resetPassword = async (email: string) => {
	const response = await fetch(`${BASE_URL}/api/v1/auth/reset_password/`, {
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
