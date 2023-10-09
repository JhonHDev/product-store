import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProductType } from '../../../slices/filtersSlice';

import FatArrowDownIcon from '../../../../../shared/components/FatArrowDownIcon';

interface ProductTypeItem {
	id: number;
	name: string;
	color: string;
}

const productTypes: ProductTypeItem[] = [
	{ id: 1, name: 'Frutas', color: 'bg-black' },
	{ id: 2, name: 'Vegetales', color: 'bg-black' },
	{ id: 3, name: 'Bebidas', color: 'bg-black' },
	{ id: 4, name: 'Proteína', color: 'bg-black' },
	{ id: 5, name: 'Enlatados', color: 'bg-black' },
	{ id: 6, name: 'Higiene', color: 'bg-black' },
];

const FilterByTypeBtn = () => {
	const dispatch = useDispatch();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleAddNewType = (pType: ProductTypeItem) => {
		dispatch(
			addProductType({
				name: pType.name,
				color: pType.color,
			})
		);

		setIsMenuOpen(false);
	};

	return (
		<div className='relative'>
			<button
				onClick={toggleMenuOpen}
				className=' bg-black/90 h-[45px] px-6 text-white rounded-md flex justify-center items-center gap-3'
				type='button'
			>
				Filtrar por:
				<FatArrowDownIcon />
			</button>

			{isMenuOpen && (
				<div className='absolute top-14 z-50 shadow-lg shadow-gray shadow-gray bg-white hiddendivide-y divide-gray-100 rounded-lg w-40'>
					<ul className='py-0 text-sm text-gray-700 rounded-lg overflow-hidden'>
						{productTypes.map((pType) => (
							<button
								onClick={() => handleAddNewType(pType)}
								key={pType.id}
								className='w-full text-start block px-4 py-3 hover:bg-gray-100'
								type='button'
							>
								{pType.name}
							</button>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default FilterByTypeBtn;
