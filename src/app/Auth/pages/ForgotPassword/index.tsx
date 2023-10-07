import { useForm } from 'react-hook-form';

import AuthFormTitle from '../../components/AuthFormTitle';
import AuthBtnBack from '../../components/AuthBtnBack';

type FormFiels = {
	email: string;
};

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormFiels>();

	const onSubmit = () => {
		const { email } = getValues();
		console.log({ email });
	};

	return (
		<section className='flex flex-col gap-11 w-full h-[100vh] justify-center items-center animate__animated animate__fadeInDown'>
			<AuthFormTitle
				title='¿Olvidaste tu contraseña?'
				description='Ingresa tu correo y será enviado un enlace a su bandeja para que cambie la contraseña'
			/>

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

				<button
					className='bg-malachite hover:bg-malachite/90 text-white py-3 rounded-md'
					type='submit'
				>
					Cambiar contraseña
				</button>

				<AuthBtnBack route='/auth/sign-in' />
			</form>
		</section>
	);
};

export default ForgotPassword;
