import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Max 15 characters";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Max 15 characters";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password = `
      Minimum one Uppercase, Lowercase, Number, Special character should be there.
      Minimum eight letters should be there.
    `;
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }
  if (!values.gender) errors.gender = "Required";
  if (!values.occupation) errors.occupation = "Required";
  if (values.newsLetterSubsc.length === 0) {
    errors.newsLetterSubsc = "Atleast check one!!";
  } else if (values.newsLetterSubsc.length > 0) {
    errors.newsLetterSubsc = null;
  }
  if (!values.detailConfirmation.checked)
    errors.detailConfirmation = "Confirmation Mandatory";
  console.log(values);
  return errors;
};
const NewForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      occupation: "",
      newsLetterSubsc: "",
      detailConfirmation: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <div>
          <input
            type="text"
            name="firstName"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error-msg">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <label htmlFor="lastName">Last Name</label>
        <div>
          <input
            type="text"
            name="lastName"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error-msg">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input type="email" name="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-msg">{formik.errors.email}</div>
          ) : null}
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-msg">{formik.errors.password}</div>
          ) : null}
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div>
          <input
            type="password"
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error-msg">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <div>
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            {formik.touched.gender && formik.errors.gender ? (
              <div className="error-msg">{formik.errors.gender}</div>
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
            {formik.touched.occupation && formik.errors.occupation ? (
              <div className="error-msg">{formik.errors.occupation}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="newsLetterSubsc">Subscribe to Newsletter</label>
          <input type="checkbox" name="newsLetterSubsc" /> Brian
          <input type="checkbox" name="newsLetterSubsc" /> Michael
          {formik.touched.newsLetterSubsc && formik.errors.newsLetterSubsc ? (
            <div className="error-msg">{formik.errors.newsLetterSubsc}</div>
          ) : null}
        </div>
        <div>
          <input type="checkbox" name="detailConfirmation" />
          <label htmlFor="detailConfirmation">I agree</label>
          {formik.touched.detailConfirmation &&
          formik.errors.detailConfirmation ? (
            <div className="error-msg">{formik.errors.detailConfirmation}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default NewForm;
