import { User, updateProfile } from 'firebase/auth';

interface Params {
	user: User;
	photo: string;
}

const updateUserPhoto = async ({ user, photo }: Params) => {
	await updateProfile(user, {
		photoURL: photo,
	});
};

export default updateUserPhoto;
