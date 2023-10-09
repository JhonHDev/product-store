import { createSlice } from '@reduxjs/toolkit';

interface OrderType {
	name: string;
	color: string;
}

interface ProductType {
	name: string;
	color: string;
}

interface ProductFilters {
	orderType: OrderType | null;
	productType: ProductType | null;
}

const initialState: ProductFilters = {
	orderType: null,
	productType: null,
};

const productListSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		addOrderType: (state, action) => {
			state.orderType = action.payload;
		},
		removeOrderType: (state) => {
			state.orderType = null;
		},
		addProductType: (state, action) => {
			state.productType = action.payload;
		},
		removeProductType: (state) => {
			state.productType = null;
		},
		removeAllFilters: (state) => {
			state.orderType = null;
			state.productType = null;
		},
	},
});

export const {
	addOrderType,
	removeOrderType,
	addProductType,
	removeProductType,
	removeAllFilters,
} = productListSlice.actions;

export default productListSlice;
