import AppLayout from '../../../../shared/pages/AppLayout';
import ProductBanner from '../../components/ProductBanner';
import ProductFlters from '../../components/ProductFilters';
import SelectedProductFilters from '../../components/SelectedProductFilters';

const Products = () => {
	return (
		<AppLayout>
			<section className='grid gap-12 mb-10'>
				<ProductBanner />

				<div className='grid gap-12'>
					<ProductFlters />

					<SelectedProductFilters />

					<section className='flex flex-wrap gap-y-16 gap-x-5 justify-center md:justify-start items-center'></section>
				</div>
			</section>
		</AppLayout>
	);
};

export default Products;
