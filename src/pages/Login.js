import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
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
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/navbar");
    }

    let inputError = {
      email: "",
      password: "",
    };
    if (!input.email && !input.password) {
      setFormError({
        ...inputError,
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
    if (input.password.length !== 5) {
      setFormError({
        ...inputError,
        password: "Password should be of minimum 5 digits",
      });
      return;
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
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

          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <p className="text-danger">{formError.password}</p>
        </div>

        <button type="submit">Login</button>

        <div>
          <span>
            Don't have an account? <Link to="/register"> Register here</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
