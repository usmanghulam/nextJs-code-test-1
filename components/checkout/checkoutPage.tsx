import React, { useState } from 'react';
import * as Yup from 'yup';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Router from "next/router";
import { toast } from 'react-toastify';
import OrderSummary from './orderSummary';
import CheckoutForm from './checkoutForm';
import { CheckoutFormValues } from '../../interfaces/checkoutForm';
import Loader from '../loader';

const CheckoutPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const stripe = useStripe()
	const elements = useElements()
	const validateSchema = Yup.object().shape({
		firstName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		lastName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		email: Yup.string().trim().email('Please Enter Valid Email Address').required('Field is Required'),
		address: Yup.string().trim().required('Field is Required'),
		city: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		postcode: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
		note: Yup.string().trim()
	});

	const submitFormHandler = async (values: CheckoutFormValues) => {
		try {
			setIsLoading(true);
			const response = await stripe?.createPaymentMethod({
				type: "card",
				card: elements?.getElement(CardElement)
			})
			const token = response?.paymentMethod?.id;
			if (token) {
				toast.success("Success")
				setTimeout(() => {
					Router.push('/success');
				}, 2000);
			}
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error("Something went wrong")
			console.log(error)
		}
	}

	return <>
		<Loader isLoading={isLoading} />
		<div className="container p-12 mx-auto">
			<div className="flex flex-col w-full px-0 mx-auto md:flex-row">
				<div className="flex flex-col md:w-full">
					<h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>
					<div className='mb-2 pb-2'>
						<CheckoutForm {...{
							validateSchema,
							submitFormHandler,
							isLoading
						}} />
					</div>
				</div>
				<OrderSummary />
			</div>
		</div>
	</>
}

export default CheckoutPage;