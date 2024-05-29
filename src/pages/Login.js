import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
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
    } else {
      alert("wrong Email or Password");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
