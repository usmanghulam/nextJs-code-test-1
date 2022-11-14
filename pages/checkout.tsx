import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from '../components/checkout/checkoutPage';

const CheckoutPage = () => {
	const PUBLIC_KEY = 'pk_test_51M44cRJAux9bv0yD5z5QrGrHxR3EGLpEXLJkKsa2uhZQ91zDJ6pCrKymwE0KYVABXCrRd5xD4EIoWTY0XTIkUQ5K00DQst8jox'
	const stripeTestPromise = loadStripe(PUBLIC_KEY);
	return <>
		<Elements stripe={stripeTestPromise}>
			<Checkout />
		</Elements>
	</>
}

export default CheckoutPage;