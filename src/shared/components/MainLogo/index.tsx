import { Link } from 'react-router-dom';

const MainLogo = () => {
	return (
		<Link to='/products' className='font-bold text-3xl text-gray-800' title='Product Store'>
			PS
		</Link>
	);
};

export default MainLogo;
