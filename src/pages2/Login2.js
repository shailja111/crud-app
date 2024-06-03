import { useFormik } from "formik";
import { loginschema } from "../schemas/loginschema";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const loggeduser = {
  email: email,
  password: password,
};

const onSubmit = async (values, actions, navigate) => {
  if (
    loggeduser &&
    values.email === loggeduser.email &&
    values.password === loggeduser.password
  ) {
    localStorage.setItem("loggedin", true);
    navigate("/navbar");
  } else {
    alert("Invalid credentials");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: localStorage.getItem("email") || "",

      password: localStorage.getItem("password") || "",
    },
    validationSchema: loginschema,
    onSubmit: (values, actions) => onSubmit(values, actions, navigate),
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="w-50 mx-auto">
      <h2>Login Page</h2>
      <div className="mb-3 ">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={classNames("form-control", {
            ...(errors.email && touched.email ? "input-error" : ""),
          })}
        />
        {errors.email && touched.email && (
          <p className="text-danger">{errors.email}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classNames("form-control", {
            ...(errors.password && touched.password ? "input-error" : ""),
          })}
        />
        {errors.password && touched.password && (
          <p className="text-danger">{errors.password}</p>
        )}
      </div>

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>

      <div>
        <span>
          Don't have an account? <Link to="/register2"> Register here</Link>
        </span>
      </div>
    </form>
  );
};
export default BasicForm;
