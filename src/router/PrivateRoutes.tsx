import { Navigate, Outlet } from 'react-router-dom';

import AuthUser from '../app/Auth/models/AuthUser';

interface Params {
	user: AuthUser | null;
}

const PrivateRoutes = ({ user }: Params) => {
	return user ? <Outlet /> : <Navigate to='/auth/sign-in' />;
};

export default PrivateRoutes;
