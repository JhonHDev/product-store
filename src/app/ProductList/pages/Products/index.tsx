import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeUser } from '../../../Auth/authSlice';
import { closeAuthSession } from '../../../../shared/services';

const Products = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCloseAuthSession = async () => {
		await closeAuthSession();
		dispatch(removeUser());
		navigate('/auth/sign-in');
	};

	return (
		<div className='mx-10 py-10 flex flex-col gap-7'>
			<h1>Products</h1>

			<button
				onClick={handleCloseAuthSession}
				className='bg-orange text-white max-w-[220px] py-2 px-6 rounded-md'
				type='button'
			>
				Cerrar sesión
			</button>
		</div>
	);
};

export default Products;
