import { Navigate, Outlet } from 'react-router-dom';

import AuthUser from '../app/Auth/models/AuthUser';

interface Params {
	user: AuthUser | null;
}

const PublicRoutes = ({ user }: Params) => {
	return user ? <Navigate to='/products' /> : <Outlet />;
};
export default PublicRoutes;
