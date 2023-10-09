import { useDispatch, useSelector } from 'react-redux';

import FilterByOrderBtns from './FilterByOrderBtns';
import FilterByTypeSelectBtn from './FilterByTypeSelectBtn';

import { RootState } from '../../../../shared/store';
import { removeAllFilters } from '../../slices/filtersSlice';

import closeLogo from '../../../../assets/icons/close-icon.svg';

const ProductFlters = () => {
	const dispatch = useDispatch();

	const { orderType, productType } = useSelector((state: RootState) => state.filters);

	const handleRemoveAllFilters = () => {
		dispatch(removeAllFilters());
	};

	return (
		<section className='flex flex-wrap gap-6 lg:gap-10 justify-start items-center'>
			<FilterByTypeSelectBtn />
			<FilterByOrderBtns />

			{orderType && productType && (
				<button
					onClick={handleRemoveAllFilters}
					className='bg-gray-600 px-4 py-1 rounded text-sm text-white flex justify-center items-center gap-3'
					type='button'
					title='Limpiar filtros'
				>
					Limpiar
					<img src={closeLogo} width={20} alt='' />
				</button>
			)}
		</section>
	);
};

export default ProductFlters;
