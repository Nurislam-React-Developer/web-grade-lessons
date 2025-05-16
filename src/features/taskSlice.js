import { createSlice } from '@reduxjs/toolkit';
import {
	addTaskToServer,
	fetchTasks,
	updateTaskOnServer,
	deleteTaskFromServer,
} from './taskApi';

const initialState = {
	tasks: [],
	isLoading: false,
	error: null,
};

export const taskSlice = createSlice({
	name: 'tasks', // можно оставить 'task' — тоже ок
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// === FETCH TASKS ===
			.addCase(fetchTasks.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchTasks.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.tasks = payload;
			})
			.addCase(fetchTasks.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			// === ADD TASK ===
			.addCase(addTaskToServer.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addTaskToServer.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.tasks.push(payload);
			})
			.addCase(addTaskToServer.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			// === UPDATE TASK ===
			.addCase(updateTaskOnServer.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateTaskOnServer.fulfilled, (state, action) => {
				const index = state.tasks.findIndex(
					(task) => task.id === action.payload.id
				);
				if (index !== -1) {
					state.tasks[index] = action.payload;
				}
			})
			.addCase(updateTaskOnServer.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			// === DELETE TASK ===
			.addCase(deleteTaskFromServer.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteTaskFromServer.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.tasks = state.tasks.filter((task) => task.id !== payload);
			})
			.addCase(deleteTaskFromServer.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export default taskSlice.reducer;
