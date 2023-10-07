import { Link } from 'react-router-dom';

interface Props {
	route: string;
}

const AuthBtnBack = ({ route }: Props) => {
	return (
		<Link to={route} className='underline text-cobalt hover:text-cobalt/80 text-center py-2'>
			Regresar
		</Link>
	);
};

export default AuthBtnBack;
