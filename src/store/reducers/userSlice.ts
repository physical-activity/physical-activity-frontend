import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';

interface UserState {
	user: IUser;
	id: number | null;
	auth_token: string | null;
	isLoading: boolean;
	error: string;
}

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

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLogin(state, action: PayloadAction<string>) {
			state.auth_token = action.payload;
		},

		userGetInfo(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},

		userGetId(state, action: PayloadAction<number>) {
			state.id = action.payload;
		},
	},
});

export default userSlice.reducer;
