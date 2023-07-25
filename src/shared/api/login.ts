const BASE_USL = process.env.REACT_APP_BACKEND_BASE_URL;
console.log(BASE_USL);
export const signin = async (email: string, password: string) => {
	const response = await fetch(`${BASE_USL}/auth/token/login`, {
		method: 'POST',
		headers: {
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
