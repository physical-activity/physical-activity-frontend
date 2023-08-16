export const signin = async (email: string, password: string) => {
	const response = await fetch(
		`https://easyfit.acceleratorpracticum.ru/api/v1/auth/token/login/`,
		{
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password: password,
				email: email,
			}),
		}
	);
	let res;
	if (response.status === 200) {
		res = response.json();
	} else {
		throw new Error('Smth went wrong');
	}
	return res;
};
