import { Formik } from "formik";
import * as Yup from "yup";

const FormikYup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        occupation: "",
        newsLetterSubsc: "",
        detailConfirmation: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required")
          .max(15, "Max 15 characters allowed"),
        lastName: Yup.string()
          .required("Required")
          .max(15, "Max 15 characters allowed"),
        email: Yup.string().email("Invalid Email").required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(/[a-z]/, "Must contain at least one lowercase character")
          .matches(/[A-Z]/, "Must contain at least one uppercase character")
          .matches(/[0-9]/, "Must contain at least one number")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Must contain at least one special character"
          )
          .required("Password is required"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords should match"
        ),
        gender: "",
        occupation: "",
        newsLetterSubsc: "",
        detailConfirmation: "",
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleSubmit, getFieldProps }) => {
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <div>
            <input
              type="text"
              name="firstName"
              {...getFieldProps("firstName")}
            />
            {touched.firstName && errors.firstName ? (
              <div className="error-msg">{errors.firstName}</div>
            ) : null}
          </div>
          <label htmlFor="lastName">Last Name</label>
          <div>
            <input type="text" name="lastName" {...getFieldProps("lastName")} />
            {touched.lastName && errors.lastName ? (
              <div className="error-msg">{errors.lastName}</div>
            ) : null}
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" name="email" {...getFieldProps("email")} />
            {touched.email && errors.email ? (
              <div className="error-msg">{errors.email}</div>
            ) : null}
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              name="password"
              {...getFieldProps("password")}
            />
            {touched.password && errors.password ? (
              <div className="error-msg">{errors.password}</div>
            ) : null}
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div>
            <input
              type="password"
              name="confirmPassword"
              {...getFieldProps("confirmPassword")}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <div className="error-msg">{errors.confirmPassword}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <div>
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
              {touched.gender && errors.gender ? (
                <div className="error-msg">{errors.gender}</div>
              ) : null}
            </div>
          </div>
          <div>
            <label htmlFor="occupation">Occupation</label>
            <div>
              <select name="occupation">
                <option value="student">Student</option>
                <option value="employed">Employed</option>
                <option value="other">Other</option>
              </select>
              {touched.occupation && errors.occupation ? (
                <div className="error-msg">{errors.occupation}</div>
              ) : null}
            </div>
          </div>
          <div>
            <label htmlFor="newsLetterSubsc">Subscribe to Newsletter</label>
            <input type="checkbox" name="newsLetterSubsc" /> Brian
            <input type="checkbox" name="newsLetterSubsc" /> Michael
            {touched.newsLetterSubsc && errors.newsLetterSubsc ? (
              <div className="error-msg">{errors.newsLetterSubsc}</div>
            ) : null}
          </div>
          <div>
            <input type="checkbox" name="detailConfirmation" />
            <label htmlFor="detailConfirmation">I agree</label>
            {touched.detailConfirmation && errors.detailConfirmation ? (
              <div className="error-msg">{errors.detailConfirmation}</div>
            ) : null}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>;
      }}
    </Formik>
  );
};

export default FormikYup;
