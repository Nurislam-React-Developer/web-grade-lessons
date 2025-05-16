import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get(API_URL)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
      
    }
  }
)

export const addTaskToServer = createAsyncThunk(
  'tasks/addTaskToServer',
  async (task, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(API_URL, task)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateTaskOnServer = createAsyncThunk(
	'tasks/updateTaskOnServer',
	async ({ id, task }, { rejectWithValue }) => {
		try {
			if (!task || typeof task !== 'object') {
				return rejectWithValue('Неверные данные задачи');
			}

			const response = await axios.put(`${API_URL}/${id}`, task);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data?.message || error.message);
		}
	}
);

export const deleteTaskFromServer = createAsyncThunk(
  'tasks/deleteTaskFromServer',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)