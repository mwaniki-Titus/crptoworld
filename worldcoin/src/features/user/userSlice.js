import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    error: ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.error = '';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.token = '';
    }
  }
});

export const { setToken, setError } = userSlice.actions;

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/register', userData);
    console.log(response.data);
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', userData);
    dispatch(setToken(response.data.token));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};

export default userSlice.reducer;
