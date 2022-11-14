import React from 'react';
import * as Yup from 'yup';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import OrderSummary from './orderSummary';
import CheckoutForm from './checkoutForm';
import { CheckoutFormValues } from '../../interfaces/checkoutForm';
import StripePaymentForm from './StripePaymentForm';

const PUBLIC_KEY = 'pk_test_51M44cRJAux9bv0yD5z5QrGrHxR3EGLpEXLJkKsa2uhZQ91zDJ6pCrKymwE0KYVABXCrRd5xD4EIoWTY0XTIkUQ5K00DQst8jox'
const CheckoutPage = () => {
	const stripeTestPromise = loadStripe(PUBLIC_KEY);
	const validateSchema = Yup.object().shape({
		firstName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		lastName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		email: Yup.string().trim().email('Please Enter Valid Email Address').required('Field is Required'),
		address: Yup.string().trim().required('Field is Required'),
		city: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		postcode: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
		note: Yup.string().trim(),
		cardName: Yup.string().trim().required('Field is Required').matches(/^[aA-zZ\s]+$/, "Only Alphabets Are Allowed"),
		cardNumber: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
		cardExpirationMonth: Yup.string().trim().required('Field is Required'),
		cardExpirationYear: Yup.string().trim().required('Field is Required'),
		cardSecurityCode: Yup.string().trim().required('Field is Required').matches(/^[0-9]+$/, "Only Numbers Are Allowed"),
	});

	const submitFormHandler = async (values: CheckoutFormValues) => {
		console.log('submit handler', values);
	}

	const submitPaymentHandler = (values: any) => {
		console.log(values)

	}
	return <>
		<div className="container p-12 mx-auto">
			<div className="flex flex-col w-full px-0 mx-auto md:flex-row">
				<div className="flex flex-col md:w-full">
					<h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>
					<div className='mb-2 pb-2'>
						<Elements stripe={stripeTestPromise}>
							<StripePaymentForm {...{
								submitPaymentHandler
							}} />
						</Elements>
					</div>
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