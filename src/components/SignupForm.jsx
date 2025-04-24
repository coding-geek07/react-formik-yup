import { useFormik } from "formik";
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
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required!!")
        .max(10, "Name Should be max 15 characters!!"),
      lastName: Yup.string()
        .required("Required!!")
        .max(10, "Name Should be max 10 characters!!"),
      email: Yup.string().email("Invalid email!!").required("Email Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const errorStyles = { color: "red" };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <div>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={errorStyles}>{formik.errors.firstName}</div>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <div>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={errorStyles}>{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={errorStyles}>{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
