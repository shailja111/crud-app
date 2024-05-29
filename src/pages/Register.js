import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  }

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Your Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
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
