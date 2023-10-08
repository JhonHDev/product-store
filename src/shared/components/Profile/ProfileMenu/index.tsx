import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { closeAuthSession } from '../../../services';
import { removeUser } from '../../../../app/Auth/authSlice';

interface Props {
	name: string | null | undefined;
}

const ProfileMenu = ({ name }: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCloseAuthSession = async () => {
		await closeAuthSession();
		dispatch(removeUser());
		navigate('/auth/sign-in');
	};

	return (
		<div className='absolute top-12 lg:top-12 right-0 z-50 shadow-lg shadow-gray bg-white hiddendivide-y divide-gray-100 rounded-lg w-44'>
			<ul className='py-0 text-sm text-gray-700 rounded-lg overflow-hidden'>
				<Link to={`/profile/${name}`} className='w-full block px-4 py-3 hover:bg-gray-100 '>
					Perfil
				</Link>

				<button
					onClick={handleCloseAuthSession}
					className='w-full text-start block px-4 py-3 hover:bg-gray-100'
					type='button'
				>
					Cerrar sesión
				</button>
			</ul>
		</div>
	);
};

export default ProfileMenu;
