import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import classNames from "classnames";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const onSubmit = async (values, actions, navigate) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  navigate("/login2");
};

const Register2 = () => {
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
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, actions) => onSubmit(values, actions, navigate),
  });

  useEffect(() => {
    // Save form values to localStorage whenever they change
    localStorage.setItem("email", values.email);
    localStorage.setItem("age", values.age);
    localStorage.setItem("password", values.password);
    localStorage.setItem("confirmPassword", values.confirmPassword);
  }, [values]);

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
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classNames("form-control", {
            ...(errors.age && touched.age ? "input-error" : ""),
          })}
        />
      </div>

      {errors.age && touched.age && <p className="text-danger">{errors.age}</p>}

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
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classNames("form-control", {
            ...(errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""),
          })}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Register
      </button>
      <div>
        <span>
          Have already an account? <Link to="/login2"> Login here</Link>
        </span>
      </div>
    </form>
  );
};
export default Register2;
