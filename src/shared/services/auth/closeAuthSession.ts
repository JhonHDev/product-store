import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const closeAuthSession = async () => {
	await signOut(auth);
};

export default closeAuthSession;
