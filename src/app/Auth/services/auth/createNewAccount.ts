import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../../shared/firebase';
import { sendMessageToVerifyEmail, updateUserName } from '..';

interface Params {
	name: string;
	email: string;
	password: string;
}

const createNewAccount = async ({ name, email, password }: Params) => {
	const { user } = await createUserWithEmailAndPassword(auth, email, password);

	await updateUserName({ user, name });
	await sendMessageToVerifyEmail(user);

	return user;
};

export default createNewAccount;
