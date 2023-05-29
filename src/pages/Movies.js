import { Field, Formik, Form } from 'formik';

const Movies = () => {
  return (
    <Formik initialValues={{ query: '' }}>
      <Form>
        <button>Search</button>
        <Field name="query" type="search" autoFocus></Field>
      </Form>
    </Formik>
  );
};

export default Movies;
