import { useEffect, useState } from 'react';

import { OrderBtn } from '../../../models';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderType } from '../../../slices/filtersSlice';
import { RootState } from '../../../../../shared/store';

const initialState: OrderBtn[] = [
	{
		id: 1,
		name: 'Más baratos',
		color: 'bg-green-900',
		hoverStyle: 'hover:bg-green-800',
		isActive: false,
	},
	{
		id: 2,
		name: 'Más caros',
		color: 'bg-red-900',
		hoverStyle: 'hover:bg-red-800',
		isActive: false,
	},
	{
		id: 3,
		name: 'Más recientes',
		color: 'bg-blue-900',
		hoverStyle: 'hover:bg-blue-800',
		isActive: false,
	},
];

const FilterByOrderBtns = () => {
	const dispatch = useDispatch();

	const { orderType } = useSelector((state: RootState) => state.filters);

	const [orderItems, setOrderItems] = useState<OrderBtn[]>(initialState);

	useEffect(() => {
		if (!orderType) {
			const newItems = orderItems.map((cItem) => ({ ...cItem, isActive: false }));
			setOrderItems(newItems);
			return;
		}

		const newItems = orderItems.map((cItem) =>
			cItem.name === orderType?.name
				? { ...cItem, isActive: true }
				: { ...cItem, isActive: false }
		);

		setOrderItems(newItems);
	}, [orderItems, orderType]);

	const handleAddNewValue = (orderBtn: OrderBtn) => {
		dispatch(
			addOrderType({
				name: orderBtn.name,
				color: orderBtn.color,
			})
		);
	};

	return (
		<div className='flex gap-4 flex-col lg:flex-row justify-start items-center'>
			<h4 className='text-lg font-bold text-start w-full lg:w-auto'>Ordernar por:</h4>

			<div className='flex flex-wrap gap-4'>
				{orderItems.map((orderItem) => (
					<button
						onClick={() => handleAddNewValue(orderItem)}
						key={orderItem.id}
						className={`relative text-white py-2 px-6 rounded-md ${`${orderItem.color} ${orderItem.hoverStyle}`}`}
						type='button'
					>
						{orderItem.name}

						{orderItem.isActive && (
							<div
								className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 ${orderItem.color}`}
							></div>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default FilterByOrderBtns;
