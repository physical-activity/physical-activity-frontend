import { BASE_URL } from 'shared/utils/constants';

export const changeUserInfo = async (
	name: string,
	secondName: string,
	email: string
) => {
	const token = localStorage.getItem('token');
	const response = await fetch(`${BASE_URL}/account/`, {
		method: 'PATCH',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			first_name: name,
			last_name: secondName,
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
