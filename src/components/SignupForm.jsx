import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

const SignupForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .required("Required!!")
  //       .max(10, "Name Should be max 15 characters!!"),
  //     lastName: Yup.string()
  //       .required("Required!!")
  //       .max(10, "Name Should be max 10 characters!!"),
  //     email: Yup.string().email("Invalid email!!").required("Email Required"),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  // const errorStyles = { color: "red" };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required!!")
          .max(10, "Name Should be max 15 characters!!"),
        lastName: Yup.string()
          .required("Required!!")
          .max(10, "Name Should be max 10 characters!!"),
        email: Yup.string().email("Invalid email!!").required("Email Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <div>
          <Field type="text" name="firstName" />
          <div className="error-msg">
            <ErrorMessage name="firstName" />
          </div>
        </div>
        <label htmlFor="lastName">Last Name</label>
        <div>
          <Field type="text" name="lastName" />
          <div className="error-msg">
            <ErrorMessage name="lastName" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <Field type="email" name="email" />
          <div className="error-msg">
            <ErrorMessage name="email" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
