import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../shared/store';

import { removeOrderType, removeProductType } from '../../slices/filtersSlice';

const SelectedProductFilters = () => {
	const { orderType, productType } = useSelector((state: RootState) => state.filters);

	const dispatch = useDispatch();

	const handleRemoveProductType = () => {
		dispatch(removeProductType());
	};

	const handleRemoveOrderType = () => {
		dispatch(removeOrderType());
	};

	return (
		<div className='flex flex-wrap gap-2 justify-start items-center'>
			{productType && (
				<button
					onClick={handleRemoveProductType}
					className={`bg-blue-100 text-xs font-medium mr-2 px-6 py-1 rounded text-white capitalize ${productType.color}`}
					type='button'
					title='Remover filtro'
				>
					{productType?.name}
				</button>
			)}

			{orderType && (
				<button
					onClick={handleRemoveOrderType}
					className={`bg-blue-100 text-xs font-medium mr-2 px-6 py-1 rounded text-white capitalize ${orderType.color}`}
					type='button'
					title='Remover filtro'
				>
					{orderType?.name}
				</button>
			)}
		</div>
	);
};

export default SelectedProductFilters;
