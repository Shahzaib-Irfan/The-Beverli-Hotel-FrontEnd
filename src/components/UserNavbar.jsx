import { React, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
const UserNavbar = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    logout,
    user,
    userBookingsHistory,
    fetchDataForAddingReview,
    AddReview,
  } = useAuthContext();
  useEffect(() => {
    fetchDataForAddingReview();
  }, []);
  useEffect(() => {
    AddReview();
  }, [userBookingsHistory]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          The Beverli Hills
        </Link>
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
              <Link className="nav-link active" to="viewrooms">
                View Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="userbookings">
                Bookings History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="pendingpayments">
                Pending Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="userreviews">
                Pending Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="reviews">
                Visitor Reviews
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              style={{ display: "flex", flexDirection: "row", padding: "3px" }}
            >
              <img
                src={user.picture}
                alt={user.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <button
                style={{ marginLeft: "10px" }}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="btn btn-outline-warning"
                type="submit"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
