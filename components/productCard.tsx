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
		<div className="w-full h-100 max-w-sm mx-auto overflow-hidden">
			<div className="h-80 w-full justify-end object-contain">
				<Link href={`/products/${id}`}>
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</Link>
			</div>
			<div className="pt-4 whitespace-nowrap flex p-1">
				<h3 className="ml-2 text-lg font-bold uppercase text-ellipsis w-30 overflow-hidden">{title}</h3>
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
