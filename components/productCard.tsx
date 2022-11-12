import React, { FC } from "react";
import Link from "next/link";
import LikedIcon from "./icons/liked";
import { IProduct } from "../interfaces/products";

const ProductCard: FC<IProduct> = ({
	id,
	image,
	price,
	title
}) => {

	return (
		<div className="w-full max-w-sm mx-auto overflow-hidden border border-black">
			<div className="h-60 w-full justify-end object-contain">
				<Link href={`/products/${id}`}>
					<img
						src={image}
						alt={title}
					/>
				</Link>
				<button className="mt-6 ml-2">
					<LikedIcon />
				</button>
			</div>
			<div className="mb-4 lg:mt-48 mt-12 lg:pt-8">
				<h3 className="ml-2 text-lg font-bold uppercase">{title}</h3>
				<div className="flex flex-col">
					<span className="ml-2 text-lg leading-7">
						${price}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
