import React, { FC } from 'react'
import { CardElement } from "@stripe/react-stripe-js"

const StripePaymentForm: FC = () => {
	return <>
		<label
			htmlFor=""
			className="block mt-3 text-sm font-semibold text-gray-500"
		>
			Payment Information
		</label>
		<fieldset className="FormGroup">
			<div className="FormRow">
				<CardElement />
			</div>
		</fieldset>
	</>
}

export default StripePaymentForm;