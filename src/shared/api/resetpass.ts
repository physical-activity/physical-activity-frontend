export const resetPassword = async (email: string) => {
	const response = await fetch(
		`https://easyfit.acceleratorpracticum.ru/api/v1/auth/reset_password/`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
			}),
		}
	);
	let res;
	if (response.status === 204) {
		// res = response.json()
	} else {
		throw new Error('Smth went wrong');
	}
	return res;
};
