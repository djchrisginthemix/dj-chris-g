import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../components/Button'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Name should have at least 5 characters')
    .max(50, 'Name should not exceed 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .max(50, 'Email should not exceed 50 characters')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Phone number must have the format ###-###-####',
    )
    .required('Phone number is required')
    .test('phone', 'Phone number must have 10 digits', (value) => {
      if (value) {
        const digitsOnly = value.replace(/\D/g, '')
        return digitsOnly.length === 10
      }
      return true
    }),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long')
    .max(100, 'Message must be at most 100 characters long'),
})

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const FooterForm = () => {
  const [resetKey, setResetKey] = useState(0) // Add resetKey state variable

  const handleSubmit = (values, actions) => {
    console.log(values)
    actions.setSubmitting(false)
  }

  const handleReset = (formik) => {
    formik.resetForm({}, false) // Pass false as the second argument
    setResetKey((prevKey) => prevKey + 1) // Increment the resetKey variable
  }

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`
    }
    return phoneNumber
  }

  return (
    <Formik
      key={resetKey} // Add key prop with resetKey value
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ formik, resetForm, setFieldValue }) => (
        <Form>
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-6">
              <label htmlFor="name" className="tct-label block text-white mb-3">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="tct-input w-full rounded-md bg-white text-gray-800"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="bg-red-500 text-xs text-white p-2 rounded-b-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="tct-label block text-white mb-3"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="tct-input w-full rounded-md bg-white text-gray-800"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="bg-red-500 text-xs text-white p-2 rounded-b-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="tct-label block text-white mb-3"
              >
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="tct-input w-full rounded-md bg-white text-gray-800"
                onChange={(e) => {
                  const formattedPhone = formatPhoneNumber(e.target.value)
                  setFieldValue('phone', formattedPhone)
                }}
                maxLength="12" // Set the maximum length to include the dashes
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="bg-red-500 text-xs text-white p-2 rounded-b-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="tct-label block text-white mb-3"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Describe what you are looking for here"
                rows="5"
                className="tct-textarea w-full rounded-md bg-white text-gray-800"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="bg-red-500 text-xs text-white p-2 rounded-b-md"
              />
            </div>
            <div className="form-actions flex gap-2 md:gap-4 justify-center items-center sm:justify-end sm:items-end mt-8">
              <Button
                type="submit"
                useLink={false}
                text="Submit"
                color="blue"
                size="sm"
                disabled={!formik?.isValid || formik.isSubmitting}
              />
              <Button
                type="button"
                useLink={false}
                text="Reset"
                color="blue"
                size="sm"
                onClick={() =>
                  handleReset({ resetForm, values: initialValues })
                }
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default FooterForm
