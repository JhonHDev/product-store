import { createSlice } from '@reduxjs/toolkit';

import AuthState from './models/AuthState';

const initialState: AuthState = {
	user: {
		userId: null,
		name: null,
		email: null,
		photo: null,
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.user = action.payload;
		},
		removeUser: (state) => {
			state.user = null;
		},
	},
});

export default authSlice;
