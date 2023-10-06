import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
	const authUser = false;

	return authUser ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutes;
