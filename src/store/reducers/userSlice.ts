import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export interface IUser {
	first_name: string;
	second_name: string;
	phone: string;
	email: string;
	photo: string;
}

export type UserState = {
	user: IUser;
	id: number | null;
	auth_token: string | null;
	isLoading: boolean;
	error: string;
};

let initialState: UserState;

initialState = {
	user: {
		first_name: '',
		second_name: '',
		phone: '',
		email: '',
		photo: '',
	},
	id: null,
	auth_token: null,
	isLoading: false,
	error: '',
};

type data = {
	name: string;
	secondName: string;
	email: string;
};

export const changeUserInfo = createAsyncThunk<any, data>(
	'user/changeData',
	async (data) => {
		const token = localStorage.getItem('token');

		const response = await fetch(`https://easyfit.space/api/v1/account/`, {
			method: 'PATCH',
			headers: {
				Authorization: `Token ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_name: data.name,
				last_name: data.secondName,
				email: data.email,
			}),
		});
		let res;
		if (response.status === 200) {
			res = response.json();
		} else {
			throw new Error('Smth went wrong');
		}
		return res;
	}
);

type signinData = {
	password: string;
	email: string;
};

export const singInUser = createAsyncThunk<any, signinData>(
	'user/signin',
	async (data) => {
		const response = await fetch(
			`https://easyfit.space/api/v1/auth/token/login/`,
			{
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password: data.password,
					email: data.email,
				}),
			}
		);
		let res;
		if (response.status === 200) {
			res = response.json();
		} else if (response.status === 400) {
			throw new Error('Invalid Data');
		} else if (response.status === 500) {
			throw new Error('Server Error');
		}
		return res;
	}
);

type resetPassType = {
	new_password: string;
	uid: string;
	token: string;
};

export const resetUserPassword = createAsyncThunk<any, resetPassType>(
	'post/resetPassword',
	async (data) => {
		const res = await fetch(
			`https://easyfit.space/api/v1/auth/set_new_password/${data.uid}/${data.token}/`,
			{
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					uid: data.uid,
					token: data.token,
					new_password: data.new_password,
				}),
			}
		);
		let response;
		if (res.status === 200) {
			response = res.json();
		} else {
			throw new Error('Smth went wrong');
		}
		return response;
	}
);

export const getUserData = createAsyncThunk<any>('user/getData', async () => {
	const token = localStorage.getItem('token');
	const res = await fetch('https://easyfit.space/api/v1/account/', {
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
});

export const userAuthGoogle = createAsyncThunk('auth/google', async () => {
	const google_access_token = localStorage.getItem('google_access_token');
	const res = await fetch(`https://easyfit.space/api/v1/dj-rest-auth/google/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			access_token: google_access_token,
		}),
	});
	let response;
	if (res.status === 200) {
		response = res.json();
	} else if (res.status === 400) {
		throw new Error('Invalid Data');
	} else if (res.status === 500) {
		throw new Error('Server Error');
	}
	return response;
});

export const userAuthVK = createAsyncThunk('auth/vk', async (code: string) => {
	const res = await fetch(`https://easyfit.space/api/v1/dj-rest-auth/vk/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			code: code,
		}),
	});
	let response;
	if (res.status === 200) {
		response = await res.json();
	} else {
		throw new Error("Can't login");
	}
	return response;
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUserData: (state, action) => {
			return (state = action.payload);
		},
		setUserData: (state, action) => {
			state.user.email = action.payload.email;
			state.user.first_name = action.payload.given_name;
			state.user.second_name = action.payload.family_name;
			state.user.photo = action.payload.picture;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(changeUserInfo.fulfilled, (state, action) => {
			state.user.email = action.payload.email;
			state.user.first_name = action.payload.first_name;
			state.user.second_name = action.payload.last_name;
		});
		builder.addCase(getUserData.fulfilled, (state, action) => {
			state.user.email = action.payload.email;
			state.user.first_name = action.payload.first_name;
			state.user.second_name = action.payload.last_name;
			state.user.phone = action.payload.phone;
			state.user.photo = action.payload.photo;
		});
		builder.addCase(singInUser.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.auth_token);
			state.auth_token = action.payload.auth_token;
		});
		builder.addCase(userAuthGoogle.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.key);
			state.auth_token = action.payload.key;
		});
		builder.addCase(userAuthVK.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.key);
			state.auth_token = action.payload.key;
		});
	},
});

export const { clearUserData, setUserData } = userSlice.actions;

export default userSlice.reducer;
