import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<section className='w-full h-[100vh] flex flex-col gap-5 justify-center items-center'>
			<h1 className='text-3xl'>¡La página que buscas no existe!</h1>

			<button
				onClick={handleGoBack}
				className='bg-cobalt text-white py-2 px-8 rounded-md'
				type='button'
				title='Regresar'
			>
				Regresar
			</button>
		</section>
	);
};

export default NotFound;
