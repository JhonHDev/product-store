import createNewAccount from './auth/createNewAccount';
import loginWithEmailAndPassword from './auth/loginWithEmailAndPassword';
import sendMessageToResetPassword from './auth/sendMessageToResetPassword';
import sendMessageToVerifyEmail from './auth/sendMessageToVerifyEmail';

import updateUserName from './user/updateUserName';
import updateUserPhoto from './user/updateUserPhoto';

export {
	createNewAccount,
	sendMessageToVerifyEmail,
	loginWithEmailAndPassword,
	updateUserName,
	updateUserPhoto,
	sendMessageToResetPassword,
};
