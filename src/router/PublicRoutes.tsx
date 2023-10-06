import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
	const authUser = true;

	return authUser ? <Outlet /> : <Navigate to='/auth/' />;
};

export default PublicRoutes;
