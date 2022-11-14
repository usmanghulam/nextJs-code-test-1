import { FC, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { IProduct } from "../../interfaces/products";
import ProductCard from "../../components/productCard";
import Categories from "../../components/Categories";
import Loader from "../../components/loader";

interface Props {
	products: IProduct[]
	categories: string[]
}

const getProducts = async () => {
	return await axios.get(`https://fakestoreapi.com/products`);
}

const getAllCategories = async () => {
	return await axios.get('https://fakestoreapi.com/products/categories');
}

const Products: FC<Props> = ({ products, categories }) => {
	const [allProducts, setAllProducts] = useState(products || []);
	const [isLoading, setIsLoading] = useState(false);
	const selectCategory = async (category: string) => {
		setIsLoading(true);
		const { data, status } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
		if (status === 200) setAllProducts(data);

		setIsLoading(false);
	}
	return (
		<>
			<Loader isLoading={isLoading} />
			<div className="container mx-auto px-6">
				<h3 className="text-gray-700 text-5xl font-bold mb-8">Clothes</h3>
				<Categories {...{
					categories,
					selectCategory
				}} />
				<div>
					<div className="grid grid-cols-2 w-full gap-2 ml-auto mr-auto mt-8 lg:grid-cols-3 xl:grid-cols-4 mt-6 lg:gap-8 border">
						{allProducts.map((product: IProduct) => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const { data, status }: AxiosResponse = await getProducts();
	const categories: AxiosResponse = await getAllCategories();
	return {
		props: {
			products: status === 200 ? data : [],
			categories: categories.data,
		},
	};
}

export default Products;
