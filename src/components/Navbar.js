import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuthContext();
  return (
    <nav
      style={{ background: "inherit" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The Beverli Hills
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              onClick={() => loginWithRedirect()}
              className="btn btn-outline-warning"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
