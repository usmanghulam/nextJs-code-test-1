import React from 'react';
import * as Yup from 'yup';
import OrderSummary from './orderSummary';
import CheckoutForm from './checkoutForm';
import { CheckoutFormValues } from '../../interfaces/checkoutForm';

const CheckoutPage = () => {

	const validateSchema = Yup.object().shape({
		firstName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		lastName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		email: Yup.string().trim().email('Please Enter Valid Email Address').required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		address: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		city: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		postcode: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
		note: Yup.string().trim(),
		cardName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		cardNumber: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
		cardExpirationMonth: Yup.string().trim().required('Field is Required'),
		cardExpirationYear: Yup.string().trim().required('Field is Required'),
		cardSecurityCode: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
	});

	const submitFormHandler = (values: CheckoutFormValues) => {
		console.log('submit handler', values);
	}
	return <>
		<div className="container p-12 mx-auto">
			<div className="flex flex-col w-full px-0 mx-auto md:flex-row">
				<div className="flex flex-col md:w-full">
					<h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
					</h2>
					<CheckoutForm {...{
						validateSchema,
						submitFormHandler
					}} />
				</div>
				<OrderSummary />
			</div>
		</div>
	</>
}

export default CheckoutPage;