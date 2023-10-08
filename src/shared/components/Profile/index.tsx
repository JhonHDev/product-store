import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import ProfileMenu from './ProfileMenu';

interface Props {
	isMenuOpen: boolean;
	toggleMenuOpen: () => void;
}

const Profile = ({ isMenuOpen, toggleMenuOpen }: Props) => {
	const { user } = useSelector((state: RootState) => state.auth);

	return (
		<div className='relative'>
			<button onClick={toggleMenuOpen} className='' type='button' title='Abrir menú'>
				{user?.photo ? (
					<img src={user.photo} alt={`Foto de perfil de ${user.name}`} />
				) : (
					<div className='flex justify-center items-center gap-3'>
						<span> {user?.name}</span>
						<div className='flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600'>
							<span className='font-mediumuppercase text-white'>
								{user?.name?.substring(0, 1)}
							</span>
						</div>
					</div>
				)}
			</button>

			{isMenuOpen && <ProfileMenu name={user?.name} />}
		</div>
	);
};

export default Profile;
