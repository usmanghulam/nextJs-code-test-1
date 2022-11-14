import React, { FC } from 'react'
import { Formik } from 'formik';
import StripePaymentForm from './StripePaymentForm';
import { CheckoutFormValues } from '../../interfaces/checkoutForm';
import Button from './Button';

interface IProps {
	validateSchema: any;
	submitFormHandler: (values: CheckoutFormValues) => void;
	isLoading: boolean;
}

const CheckoutForm: FC<IProps> = ({ validateSchema, submitFormHandler, isLoading }) => {
	return <>
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				address: '',
				city: '',
				postcode: '',
				note: ''
			}}
			validationSchema={validateSchema}
			onSubmit={submitFormHandler}
		>
			{({ errors, handleBlur, handleChange, touched, handleSubmit, values }) => (
				<form className="justify-center w-full mx-auto" onSubmit={handleSubmit} >
					<div className="">
						<div className="space-x-0 lg:flex lg:space-x-4">
							<div className="w-full lg:w-1/2">
								<label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
									Name</label>
								<input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
									name="firstName"
									type="text"
									placeholder="First Name"
									className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
								{errors?.firstName && touched?.firstName && <span className='error-message'>{errors.firstName}</span>}
							</div>
							<div className="w-full lg:w-1/2 ">
								<label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
									Name</label>
								<input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
									name="lastName"
									type="text"
									placeholder="Last Name"
									className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
								{errors?.lastName && touched?.lastName && <span className='error-message'>{errors.lastName}</span>}
							</div>
						</div>
						<div className="mt-4">
							<div className="w-full">
								<label htmlFor="Email"
									className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
								<input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									name="email"
									type="email"
									placeholder="Email"
									className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
								{errors?.email && touched?.email && <span className='error-message'>{errors.email}</span>}
							</div>
						</div>
						<div className="mt-4">
							<div className="w-full">
								<label htmlFor="Address"
									className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
								<textarea
									className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.address}
									name="address"
									cols={20}
									rows={4}
									placeholder="Address"
								/>
								{errors?.address && touched?.address && <span className='error-message'>{errors.address}</span>}
							</div>
						</div>
						<div className="space-x-0 lg:flex lg:space-x-4">
							<div className="w-full lg:w-1/2">
								<label htmlFor="city"
									className="block mb-3 text-sm font-semibold text-gray-500">City</label>
								<input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.city}
									name="city"
									type="text"
									placeholder="City"
									className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
								{errors?.city && touched?.city && <span className='error-message'>{errors.city}</span>}
							</div>
							<div className="w-full lg:w-1/2 ">
								<label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
									Postcode</label>
								<input
									name="postcode"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.postcode}
									type="text"
									placeholder="Post Code"
									className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
								{errors?.postcode && touched?.postcode && <span className='error-message'>{errors.postcode}</span>}
							</div>
						</div>
						<StripePaymentForm />
						<div className="relative pt-1 xl:pt-6"><label htmlFor="note"
							className="block mb-3 text-sm font-semibold text-gray-500"> Notes
							(Optional)</label><textarea
								name="note"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.note}
								className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
								rows={4}
								placeholder="Notes for delivery"
							/>
						</div>
						<div className="flex items-center mt-4">
							<label className="flex items-center text-sm group text-heading">
								<input
									type="checkbox"
									className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
								/>
								<span className="ml-2">Save this information for next time</span></label>
						</div>
						<div className="mt-4">
							<Button isLoading={isLoading} />
						</div>
					</div>
				</form>
			)}
		</Formik>
	</>
}

export default CheckoutForm