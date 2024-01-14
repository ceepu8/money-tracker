'use client'

import { Form, Formik } from 'formik'

/**
 * `enableReinitialize` in Formik: When set to `true`, automatically updates the form field values
 * with new values from `initialValues` when the `initialValues` prop changes.
 */

/**
 * FormProvider component for rendering a Formik form with additional features.
 *
 * @param {object} params - FormProvider configuration parameters.
 * @param {string} params.title - Title to display above the form.
 * @param {ReactNode|Function} params.children - Form content or render function.
 * @param {object} params.validationSchema - Yup validation schema for form fields.
 * @param {object} params.initialValues - Initial values for form fields.
 * @param {function} params.onSubmit - Function to handle form submission.
 */
const FormProvider = ({ title, children, validationSchema, initialValues, onSubmit, ...props }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      <Formik
        enableReinitialize
        validateOnBlur={false}
        validateOnMount={false}
        {...{ validationSchema, initialValues, onSubmit }}
        {...props}
      >
        {(formik) => (
          <Form>{children && typeof children === 'function' ? children?.(formik) : children}</Form>
        )}
      </Formik>
    </>
  )
}

export default FormProvider
