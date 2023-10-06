import { HashRouter, Routes, Route } from 'react-router-dom';

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
/*********************** GLOBAL *****************************/

const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/auth' element={<PrivateRoutes />}>
					<Route index element={<SignUp />} />
					<Route path='sign-up' element={<SignUp />} />
					<Route path='sign-in' element={<SignIn />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
					<Route path='*' element={<NotFound />} />
				</Route>

				<Route path='/' element={<PublicRoutes />}>
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
