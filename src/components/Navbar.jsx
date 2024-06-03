import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllData } from "../features/gitUserSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allusers = useSelector((state) => state.app.users);
  const userName = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("loggedin");
    navigate("/login2");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/create">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/showusers"
                  onClick={() => dispatch(getAllData())}
                >
                  Go To All Users ({allusers.length})
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>

      <h1>Home</h1>
      <h2>Welcome {userName.name}</h2>
    </div>
  );
}

export default Navbar;
