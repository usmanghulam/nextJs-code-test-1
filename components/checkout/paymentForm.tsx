import React, { FC } from 'react'

const PaymentForm: FC<any> = ({ errors, handleBlur, handleChange, touched, handleSubmit, values }) => {
	return <>
		<div className="flex -mx-2 pt-5">
			<div className="px-2">
				<label htmlFor="type1" className="flex items-center cursor-pointer">
					<input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
					<img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
				</label>
			</div>
			<div className="px-2">
				<label htmlFor="type2" className="flex items-center cursor-pointer">
					<input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
					<img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
				</label>
			</div>
		</div>
		<div className="mb-3">
			<label className="font-bold text-sm mb-2 ml-1">Name on card</label>
			<div>
				<input
					name="cardName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.cardName}
					className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
					placeholder="John Smith"
					type="text"
				/>
				{errors?.cardName && touched?.cardName && <span className='error-message'>{errors.cardName}</span>}
			</div>
		</div>
		<div className="mb-3">
			<label className="font-bold text-sm mb-2 ml-1">Card number</label>
			<div>
				<input
					name='cardNumber'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.cardNumber}
					className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
					placeholder="0000 0000 0000 0000"
					type="text" />
				{errors?.cardNumber && touched?.cardNumber && <span className='error-message'>{errors.cardNumber}</span>}
			</div>
		</div>
		<div className="mb-3 -mx-2 flex items-end">
			<div className="px-2 w-1/2">
				<label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
				<div>
					<select
						name='cardExpirationMonth'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.cardExpirationMonth}
						className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
					>
						<option value="01">01 - January</option>
						<option value="02">02 - February</option>
						<option value="03">03 - March</option>
						<option value="04">04 - April</option>
						<option value="05">05 - May</option>
						<option value="06">06 - June</option>
						<option value="07">07 - July</option>
						<option value="08">08 - August</option>
						<option value="09">09 - September</option>
						<option value="10">10 - October</option>
						<option value="11">11 - November</option>
						<option value="12">12 - December</option>
					</select>
					{errors?.cardExpirationMonth && touched?.cardExpirationMonth && <span className='error-message'>{errors.cardExpirationMonth}</span>}
				</div>
			</div>
			<div className="px-2 w-1/2">
				<select
					name='cardExpirationYear'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.cardExpirationYear}
					className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
				>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
				</select>
				{errors?.cardExpirationYear && touched?.cardExpirationYear && <span className='error-message'>{errors.cardExpirationYear}</span>}
			</div>
		</div>
		<div className="">
			<label className="font-bold text-sm mb-2 ml-1">Security code</label>
			<div>
				<input
					name='cardSecurityCode'
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.cardSecurityCode}
					className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
					placeholder="000"
					type="text"
				/>
				{errors?.cardSecurityCode && touched?.cardSecurityCode && <span className='error-message'>{errors.cardSecurityCode}</span>}
			</div>
		</div>
	</>
}

export default PaymentForm;