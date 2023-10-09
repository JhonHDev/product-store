import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../../app/Auth/authSlice';
import filtersSlice from '../../app/ProductList/slices/filtersSlice';

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		filters: filtersSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
