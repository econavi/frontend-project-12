import { Formik, Form, Field, ErrorMessage } from 'formik'

export const LoginForm = () => {
  const initialValues = { login: '', password: '' }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('values', values)
      setSubmitting(false)
    }, 400)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}
