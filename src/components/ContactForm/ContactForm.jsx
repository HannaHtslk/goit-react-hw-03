import { Formik, Form, Field } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.container}>
        <label className={s.label} htmlFor={nameId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameId}></Field>
        <label className={s.label} htmlFor={phoneId}>
          Number
        </label>
        <Field
          className={s.input}
          type="text"
          name="number"
          id={phoneId}
        ></Field>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
