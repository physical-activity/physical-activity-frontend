export const signup = (name: string, email: string, password: string) => {
	return fetch(`https://easyfit.acceleratorpracticum.ru/api/v1/auth/signup/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			first_name: name,
			email: email,
			password: password,
		}),
	}).then((res) => {
		if (!res.ok) {
			return res.text().then((text) => {
				throw new Error(text);
			});
		} else {
			return res.json();
		}
	});
};
