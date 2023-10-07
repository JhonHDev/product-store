import { useForm } from 'react-hook-form';

import AuthFormTitle from '../../components/AuthFormTitle';
import AuthOptions from '../../components/AuthOptions';

type FormFiels = {
	name: string;
	email: string;
	password: string;
};

const SignUp = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormFiels>();

	const onSubmit = () => {
		const { name, email, password } = getValues();
		console.log({ name, email, password });
	};

	return (
		<section className='flex flex-col gap-10 w-full h-[100vh] justify-center items-center animate__animated animate__fadeInLeft'>
			<AuthFormTitle title='Registrarse' />

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
				<label htmlFor='name' className='flex flex-col gap-2'>
					<span>Nombre:</span>
					<input
						type='text'
						id='name'
						className={`outline-none min-w-[300px] border px-4 py-2 rounded-md ${
							errors.name ? 'border-red-500' : 'border-gray-600'
						} `}
						{...register('name', {
							required: {
								value: true,
								message: 'El nombre es requerido',
							},
							minLength: {
								value: 3,
								message: 'Mínimo 3 caracteres',
							},
						})}
					/>
				</label>

				{errors.name && <span className='text-red-500 -mt-2'>{errors.name.message}</span>}

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
					Crear cuenta
				</button>
			</form>

			<AuthOptions />
		</section>
	);
};

export default SignUp;
