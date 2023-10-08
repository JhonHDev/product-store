import cartLogo from '../../../assets/icons/cart-logo.svg';

const CartBtn = () => {
	return (
		<button
			className='bg-malachite py-2 px-4 rounded-md flex justify-center items-center gap-4'
			title='Abrir carrito de compras'
		>
			<img src={cartLogo} alt='Imagen del carrito de compras' />

			<span className='text-white font-bold'>0</span>
		</button>
	);
};

export default CartBtn;
