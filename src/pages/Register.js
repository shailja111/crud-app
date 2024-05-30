import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));

    let inputError = {
      name: "",
      email: "",
      password: "",
    };
    if (!input.email && !input.password && !input.name) {
      setFormError({
        ...inputError,
        name: "Name should not be empty",
        email: "Enter a valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (!input.email) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
      });
      return;
    }
    if (!input.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }
    if (!input.name) {
      setFormError({
        ...inputError,
        name: "Name should not be empty",
      });
      return;
    }
    if (input.password.length !== 5) {
      setFormError({
        ...inputError,
        password: "Password should be of minimum 5 digits",
      });
      return;
    }

    navigate("/");
  }

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className="form-control"
          />
          <p className="text-danger">{formError.name}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="form-control"
          />
          <p className="text-danger">{formError.email}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Your Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="form-control"
          />
          <p className="text-danger">{formError.password}</p>
        </div>
        <button type="submit">Register</button>

        <div>
          <span>
            Have already an account? <Link to="/"> Login here</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
