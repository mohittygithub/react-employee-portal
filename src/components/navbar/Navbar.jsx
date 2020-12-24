import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ location }) => {
  return (
    <div>
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ? null : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <div>
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="about" className="nav-item nav-link">
                    About
                  </Link>
                </div>
                <div>
                  <Link to="contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <span className="nav-item nav-link">username</span>
                <Link to="/signin" className="nav-item nav-link">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
export default withRouter(Navbar);
