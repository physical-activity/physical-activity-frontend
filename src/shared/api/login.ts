const BASE_USL = process.env.REACT_APP_BACKEND_BASE_URL;
console.log(BASE_USL);
export const signin = async (email: string, password: string) => {
	const response = await fetch(
		`https://91.201.53.71/api/v1/auth/token/login/`,
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
