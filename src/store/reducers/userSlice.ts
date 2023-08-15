import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';

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
		const response = await fetch(
			`https://easyfit.acceleratorpracticum.ru/api/v1/account/`,
			{
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
			}
		);
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
			`https://easyfit.acceleratorpracticum.ru/api/v1/auth/token/login/`,
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
		} else {
			throw new Error('Smth went wrong');
		}
		return res;
	}
);

export const getUserData = createAsyncThunk<any>('user/getData', async () => {
	const token = localStorage.getItem('token');
	const res = await fetch(
		'https://easyfit.acceleratorpracticum.ru/api/v1/account/',
		{
			method: 'GET',
			headers: {
				Authorization: `Token ${token}`,
			},
		}
	);
	let response;
	if (res.status === 200) {
		response = res.json();
	} else {
		throw new Error('Smth went wrong');
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
	},
});

export const { clearUserData } = userSlice.actions;

export default userSlice.reducer;
