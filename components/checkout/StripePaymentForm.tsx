import React, { FC, FormEvent } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

interface IProps {
	submitPaymentHandler: (values: any) => void;
}

const StripePaymentForm: FC<IProps> = ({ submitPaymentHandler }) => {
	const stripe = useStripe()
	const elements = useElements()
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement)
		})

		if (!error) {
			try {
				const { id } = paymentMethod
				const response = await axios.post("http://localhost:4000/payment", {
					amount: 1000,
					id
				})

				if (response.data.success) {
					console.log("Successful payment")
					submitPaymentHandler(response)
				}

			} catch (error) {
				console.log("Error", error)
			}
		} else {
			console.log(error.message)
		}

	}
	return <>
		<form onSubmit={handleSubmit}>
			<fieldset className="FormGroup">
				<div className="FormRow">
					<CardElement />
				</div>
			</fieldset>
			<button
				className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"
			>Pay</button>
		</form>
	</>
}

export default StripePaymentForm;