import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { number, string } from 'prop-types';

const initialState = {
	steps: 0,
	distance: 0,
	duration: 0,
};

const startOfTheDay = new Date().setHours(0, 0, 0, 0);
const endOfTheDay = new Date().setHours(23, 59, 59, 999);

export const getActivitySteps = createAsyncThunk(
	'activity/getSteps',
	async () => {
		let token = localStorage.getItem('google_access_token');
		const res = await fetch(
			`https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					aggregateBy: [
						{
							dataTypeName: 'com.google.step_count.delta',
							dataSourceId:
								'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
						},
					],
					bucketByTime: { durationMillis: 86400000 },
					startTimeMillis: startOfTheDay,
					endTimeMillis: endOfTheDay,
				}),
			}
		);
		let response;
		if (res.status === 200) {
			response = await res.json();
			// console.log(response);
		} else {
			throw new Error("Can't get user Steps");
		}
		return response;
	}
);

export const getActivityDistance = createAsyncThunk(
	'activity/getDistance',
	async () => {
		let token = localStorage.getItem('google_access_token');
		const res = await fetch(
			`https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					aggregateBy: [
						{
							dataTypeName: 'com.google.distance.delta',
							dataSourceId:
								'derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta',
						},
					],
					bucketByTime: { durationMillis: 86400000 },
					startTimeMillis: startOfTheDay,
					endTimeMillis: endOfTheDay,
				}),
			}
		);
		let response;
		if (res.status === 200) {
			response = await res.json();
			// console.log(response);
		} else {
			throw new Error("Can't get user Distance");
		}
		return response;
	}
);

export const getActivityDuration = createAsyncThunk(
	'activity/getDuration',
	async () => {
		let token = localStorage.getItem('google_access_token');
		const res = await fetch(
			`https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					aggregateBy: [
						{
							dataTypeName: 'com.google.active_minutes',
							dataSourceId:
								'derived:com.google.active_minutes:com.google.android.gms:merge_active_minutes',
						},
					],
					bucketByTime: { durationMillis: 86400000 },
					startTimeMillis: startOfTheDay,
					endTimeMillis: endOfTheDay,
				}),
			}
		);
		let response;
		if (res.status === 200) {
			response = await res.json();
			// console.log(response);
		} else {
			throw new Error("Can't get user Duration");
		}
		return response;
	}
);

export const activitySlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearActivity: (state) => {
			state.distance = 0;
			state.duration = 0;
			state.steps = 0;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getActivitySteps.fulfilled, (state, action) => {
			state.steps =
				action.payload.bucket[0].dataset[0].point[0].value[0].intVal;
		});
		builder.addCase(getActivityDistance.fulfilled, (state, action) => {
			state.distance =
				action.payload.bucket[0].dataset[0].point[0].value[0].fpVal;
		});
		builder.addCase(getActivityDuration.fulfilled, (state, action) => {
			state.duration =
				action.payload.bucket[0].dataset[0].point[0].value[0].intVal;
		});
	},
});

export const { clearActivity } = activitySlice.actions;

export default activitySlice.reducer;
