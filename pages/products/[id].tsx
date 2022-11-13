import React from "react";
import axios from 'axios';
import Router from "next/router";
import FavoriteIcon from "../../components/icons/favorite";
import AddIcon from "../../components/icons/Add";
import MinusIcon from "../../components/icons/Minus";
import { IProduct } from "../../interfaces/products";

const ProductPage = ({ product }: { product: IProduct }) => {
  const { image, category, description, id, price, rating, title } = product;
  return (
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96 ">
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src={image}
            alt={title}
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
          <h3 className="text-3xl leading-7 mb-2 font-bold uppercase lg:text-5xl">
            {title}
          </h3>
          <span className="text-2xl leading-7 font-bold mt-3">
            ${price}
          </span>
          <div className="mt-8">
            <label className="text-1xl" htmlFor="count">
              Count: 0
            </label>
            <div className="flex items-center mt-4">
              <button
                className="border border-black w-36 h-12 text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <div className="flex justify-center">
                  <AddIcon />
                </div>
              </button>
              <button
                className="border border-black w-36 h-12 text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <div className="flex justify-center">
                  <MinusIcon />
                </div>
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-row justify-between ">
            <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              onClick={() => {
                Router.push('/checkout')
              }}
            >
              Add to Shopping Cart
            </button>
            <button
              className="-mt-8"
            >
              <FavoriteIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 md:w-2/3">
        <h3 className="text-gray-600 text-2xl font-medium">Description</h3>
        {description}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params = {} }) {
  const { id } = params as { id: string };
  const { data, status } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return {
    props: {
      product: status === 200 ? data : {}
    },
  };
}

export default ProductPage;
