import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../shared/firebase';
import { addUser } from '../app/Auth/authSlice';
import { RootState } from '../shared/store';

/******************** AUTH PAGES *****************************/
import SignUp from '../app/Auth/pages/SignUp';
import SignIn from '../app/Auth/pages/SignIn';
import ForgotPassword from '../app/Auth/pages/ForgotPassword';
/******************** AUTH PAGES *****************************/

/******************* PRODUCT PAGES ***************************/
import Products from '../app/ProductList/pages/Products';
import Product from '../app/ProductList/pages/Product';
/******************* PRODUCT PAGES ***************************/

/*********************** GLOBAL *****************************/
import NotFound from '../shared/pages/NotFound';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AppLoader from '../shared/pages/AppLoader';
/*********************** GLOBAL *****************************/

const AppRouter = () => {
	const [isAuthLoading, setIsAuthLoading] = useState(false);
	const dispatch = useDispatch();

	const { user } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		setIsAuthLoading(true);

		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(
					addUser({
						userId: user.uid,
						name: user.displayName,
						email: user.email,
						photo: user.photoURL,
					})
				);
				setIsAuthLoading(false);
			} else {
				setIsAuthLoading(false);
			}
		});
	}, [dispatch]);

	if (isAuthLoading) {
		return <AppLoader />;
	}

	return (
		<HashRouter>
			<Routes>
				<Route path='/auth' element={<PublicRoutes user={user} />}>
					<Route index element={<SignIn />} />
					<Route path='sign-in' element={<SignIn />} />
					<Route path='sign-up' element={<SignUp />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
					<Route path='*' element={<NotFound />} />
				</Route>

				<Route path='/' element={<PrivateRoutes user={user} />}>
					<Route index element={<Products />} />

					<Route path='products'>
						<Route index element={<Products />} />
						<Route path=':productId' element={<Product />} />
					</Route>

					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default AppRouter;
