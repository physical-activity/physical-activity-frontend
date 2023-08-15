// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';

// const rootReducer = combineReducers({
// 	userReducer,
// });

// export const store = configureStore({
// 	reducer: rootReducer,
// });

// export const setupStore = () => {
// 	return configureStore({
// 		reducer: rootReducer,
// 	});
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
