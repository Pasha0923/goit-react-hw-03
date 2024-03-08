import { Formik, ErrorMessage, Field, Form } from "formik";
import css from "./ContactForm.module.css";
const INITIAL_FORM_DATA = {
  userName: "",
  number: "",
};
const ContactForm = ({ onAddNewContacts }) => {
  const handleSubmit = (data, actions) => {
    onAddNewContacts(data);
    console.log(data);
    actions.resetForm();
  };
  return (
    <Formik initialValues={INITIAL_FORM_DATA} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.labelText}>Name: </span>
          <Field
            className={css.formInput}
            placeholder="Please enter name"
            type="text"
            name="userName"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="userName"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number: </span>
          <Field
            className={css.formInput}
            placeholder="Please enter number"
            type="tel"
            name="number"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
