import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import AuthFormTitle from '../../components/AuthFormTitle';
import AuthOptions from '../../components/AuthOptions';

type FormFiels = {
	email: string;
	password: string;
};

const SignIn = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormFiels>();

	const onSubmit = () => {
		const { email, password } = getValues();
		console.log({ email, password });
	};

	return (
		<section className='flex flex-col gap-10 w-full h-[100vh] justify-center items-center animate__animated animate__fadeInRight'>
			<AuthFormTitle title='Iniciar sesión' />

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
				<label htmlFor='email' className='flex flex-col gap-2'>
					<span>Correo electrónico:</span>
					<input
						type='email'
						id='email'
						className={`outline-none min-w-[300px] border px-4 py-2 rounded-md ${
							errors.email ? 'border-red-500' : 'border-gray-600'
						} `}
						{...register('email', {
							required: {
								value: true,
								message: 'El correo electrónico es requerido',
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Correo electrónico no válido',
							},
						})}
					/>
				</label>

				{errors.email && <span className='text-red-500 -mt-2'>{errors.email.message}</span>}

				<label htmlFor='password' className='flex flex-col gap-2'>
					<span>Contraseña:</span>
					<input
						type='password'
						id='password'
						className={`outline-none min-w-[300px] border px-4 py-2 rounded-md ${
							errors.password ? 'border-red-500' : 'border-gray-600'
						} `}
						{...register('password', {
							required: {
								value: true,
								message: 'Contraseña es requerida',
							},
							minLength: {
								value: 6,
								message: 'Contraseña mínimo de 6 caracteres',
							},
						})}
					/>
				</label>

				{errors.password && (
					<span className='text-red-500 -mt-2'>{errors.password.message}</span>
				)}

				<button
					className='bg-malachite hover:bg-malachite/90 text-white py-3 rounded-md'
					type='submit'
				>
					Ingresar
				</button>
			</form>

			<Link
				to='/auth/forgot-password'
				className='text-gray-950 hover:text-gray-700 underline'
			>
				Olvide mi contraseña
			</Link>

			<AuthOptions isToLogin />
		</section>
	);
};

export default SignIn;
